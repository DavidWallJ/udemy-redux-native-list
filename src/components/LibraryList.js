import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    componentWillMount() {
        // don't worry to much about how this works
        // it's boiler plate for your ListView
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }
    // udemy course 'complete react native redux course'
    // videos: 92-
    // renderRow is provided by ListView
    // we need to tell it what each item (library) will look like
    // library = the element in the list it's trying to currently render
    // passed as an argument from ListView
    renderRow(library) {
        return <ListItem library={library} />;
    }

    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

// take global state and map it to props for LibraryList
const mapStateToProps = state => {
    return { libraries: state.libraries };
};
// we use connect to give the component access to the store
export default connect(mapStateToProps)(LibraryList);

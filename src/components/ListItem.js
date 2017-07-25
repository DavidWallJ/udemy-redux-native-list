import React, { Component } from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation,
    Platform,
    UIManager
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';


class ListItem extends Component {
    componentWillUpdate() {
        // this is required for animations to work in android
        // note Platform and UIManager imported from react-native
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }

        LayoutAnimation.easeInEaseOut();
    }

    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={styles.descriptionStyle}>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    descriptionStyle: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10
    }
};

// ownProps here are the props of the 'ListItem'
const mapStateToProps = (state, ownProps) => {
    // this will return a true or false value
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
};
// 'connect' can be used to give a component access to state or call an action
// pass actions down into component as props
export default connect(mapStateToProps, actions)(ListItem);

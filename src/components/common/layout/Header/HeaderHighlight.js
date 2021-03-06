/**
 * Imports
 */
import React from 'react';
import {FormattedMessage, FormattedNumber} from 'react-intl';

// Flux
import IntlStore from '../../../../stores/Application/IntlStore';

// Required components
import Text from '../../typography/Text';

// Translation data for this component
import intlData from './HeaderHighlight.intl';

/**
 * Component
 */
class HeaderHighlight extends React.Component {

    static contextTypes = {
        getStore: React.PropTypes.func.isRequired
    };

    //*** Component Lifecycle ***//

    componentDidMount() {

        // Component styles
        require('./HeaderHighlight.scss');
    }

    //*** Template ***//

    render() {
        let intlStore = this.context.getStore(IntlStore);
        return (
            <div className="header-highlight">
                <div className="header-highlight__shipping-icon">
                  
                </div>
                <div className="header-highlight__shipping-text">
                    <Text size="small" weight="bold">
                      
                    </Text>
                </div>
            </div>
        );
    }
}

/**
 * Exports
 */
export default HeaderHighlight;

/**
 * Imports.
 */
import React from 'react';

import config from '../../config';

/**
 * Component.
 */
class BaseHtml extends React.Component {

    //*** Template ***//

    render() {
        return (
            <html lang={this.props.locale}>
                <head>
                    <meta charSet="utf-8" />
                    <title>{this.props.title}</title>
                    <meta name="viewport" content="width=device-width, user-scalable=no" />
                    <link rel="icon" type="image/png" href={`${this.props.staticURL}/favicon.ico`} />
                    <link rel="apple-touch-icon" href={`${this.props.staticURL}/apple_touch_icon.png`} />
                    <link rel="stylesheet" href={`${this.props.staticURL}/vendor/font-awesome-4.6.3/css/font-awesome.min.css`} />
                    {this.props.css.map((href, idx) => <link key={idx} rel="stylesheet" type="text/css" href={href} />)}
                    <link href="https://fonts.googleapis.com/css?family=Lato:400,100,300" rel="stylesheet" />
                
                
                    <link href="https://fonts.googleapis.com/css?family=Raleway:100,400,700" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Oswald:200,400,700" rel="stylesheet" />
                    <link href="https://use.fontawesome.com/20ab91acc4.js" rel="stylesheet" />
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet" />
          
                    <link href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Raleway:400,500,800" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:800" rel="stylesheet" />
                </head>
                <body>
                    <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
                    <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
                    {this.props.scripts.map((src, idx) => <script src={src} key={idx}></script>)}
                    <script src={`${this.props.staticURL}/vendor/switch-2.latest.min.js`}></script>
                    {config.facebookPixel && config.facebookPixel.enabled === true ?
                        <script src={`${this.props.staticURL}/vendor/facebook-pixel.js`}></script>
                        :
                        null
                    }
                    {config.facebookPixel && config.facebookPixel.enabled === true ?
                        <noscript>
                            <img height="1" width="1" style={{display: 'none'}}
                                 src={`https://www.facebook.com/tr?id=${config.facebookPixel.id}&ev=PageView&noscript=1`} />
                        </noscript>
                        :
                        null
                    }
                    {config.crisp && config.crisp.enabled === true ?
                        <script src={`${this.props.staticURL}/vendor/crisp.js`}></script>
                        :
                        null
                    }
                </body>
            </html>
        );
    }
}

/**
 * Export.
 */
export default BaseHtml;

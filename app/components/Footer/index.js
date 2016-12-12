import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

/*
|--------------------------------------------------------------------------
| Footer
|--------------------------------------------------------------------------
|
| Stateless component
|
*/

function Footer() {
    return (
        <div className={classNames('footer')}>
            <div className="p-md">
                <div className="footer p-a p-x-md">
                    <div className="b b-b m-b m-t-lg" />
                    <div className="row">
                        <div className="col-sm-3 clearfix">
                            <div className="text-sm-left text-xs-left m-y">
                                <div className="nav text-sm">
                                    Copyright © 2016. All Rights Reserved.
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="text-sm-right text-xs-left m-y">
                                <div className="nav text-sm">
                                    <Link to="/" className="nav-link m-r">
                                        <span>Link 1</span>
                                    </Link>
                                    <Link to="/" className="nav-link m-r">
                                        <span>Link 2</span>
                                    </Link>
                                    <Link to="/" className="nav-link m-r">
                                        <span>Link 3</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

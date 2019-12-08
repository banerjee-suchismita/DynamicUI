import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import ToolBar from '@material-ui/core/ToolBar'

const Navbar = () => {
    return (
        <div>
            <AppBar>
                <ToolBar>
                    <Typography variant = "heading" component = "h2">
                        Dynamic Personalized UI - Design
                    </Typography>
                </ToolBar>
            </AppBar>

        </div>
    );
}

export default Navbar;
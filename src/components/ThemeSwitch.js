import React from 'react';

//functional component
function ThemeSwitch(props) {
    let theme = 'light';
    if (theme === 'light') {
        return <button onCLick={() => (theme = "dark")}>Dark</button>;
    }
    return <button onCLick={() => (theme = "light")}>Light</button>;
}
export default ThemeSwitch;
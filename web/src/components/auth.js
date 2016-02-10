const React = require("react");
const userStore = require("../stores/userStore");

module.exports = React.createClass({
    getInitialState() {
        return {
            user: userStore.getUser()
        };
    },

    componentDidMount() {
        this.userStoreListenerToken = userStore.addListener(this._storeChanged);
    },

    componentWillUnmount() {
        this.userStoreListenerToken.remove();
    },

    _storeChanged() {
        this.setState({ user: userStore.getUser() });
    },

    render() {
        return (
            <a className="usa-button auth-status" href={ this.state.user.loggedIn ? "#" : "/auth/google" }>
                { this.state.user.loggedIn ? "Logged In" : "Login with Google" }
            </a>
        );
    }
});
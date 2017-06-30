import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";


export default class Navigation extends Component {
	state = { activeItem: "Live sessions" };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<Menu inverted pointing secondary color={this.props.color}>
				<Menu.Item
					name="Live sessions"
					active={activeItem === "Live sessions"}
					onClick={this.handleItemClick}
				/>
				<Menu.Item
					name="Schedule"
					active={activeItem === "Schedule"}
					onClick={this.handleItemClick}
				/>
				<Menu.Item
					name="Offline"
					active={activeItem === "Offline"}
					onClick={this.handleItemClick}
				/>
			<Link to="/code">
				<Menu.Item
					name="Code Editor"
					active={activeItem === "Code Editor"}
					onClick={this.handleItemClick}
				/>
			</Link>
			<Link to="/chat">
				<Menu.Item
					name="Chat"
					active={activeItem === "Chat"}
					onClick={this.handleItemClick}
				/>
			</Link>
			<Link to="/videoeditor">
				<Menu.Item
					name="Video Editor"
					active={activeItem === "Video Editor"}
					onClick={this.handleItemClick}
				/>
			</Link>
			<Link to="/whiteboard">
				<Menu.Item
					name="Whiteboard"
					active={activeItem === "Whiteboard"}
					onClick={this.handleItemClick}
				/>
			</Link>
				<Menu.Menu position="right">
					<Link to="/login">
						<Menu.Item
							name="login"
							active={activeItem === "login"}
							onClick={this.handleItemClick}
						>
							Login
						</Menu.Item>
					</Link>
					<Menu.Item
						name="about"
						active={activeItem === "about"}
						onClick={this.handleItemClick}
					>
						About
					</Menu.Item>
				</Menu.Menu>
			</Menu>
		);
	}
}

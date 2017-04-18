import React from "react";
import { Grid, Image, Input, Label, Menu, Card, Feed } from "semantic-ui-react";

const Activity = () => (
	<div>
		<Card>
			<Card.Content>
				<Card.Header>
					Recent Activity
				</Card.Header>
			</Card.Content>
			<Card.Content>
				<Feed>
					<Feed.Event>
						<Feed.Label image="https://upload.wikimedia.org/wikipedia/commons/9/97/Tiffany_Hwang_at_a_fansigning_in_Busan%2C_in_June_2016_06.jpg" />
						<Feed.Content>
							<Feed.Date content="1 day ago" />
							<Feed.Summary>
								You added
								{" "}
								<a>Jenny Hess</a>
								{" "}
								to your
								{" "}
								<a>coworker</a>
								{" "}
								group.
							</Feed.Summary>
						</Feed.Content>
					</Feed.Event>

					<Feed.Event>
						<Feed.Label image="https://upload.wikimedia.org/wikipedia/commons/9/97/Tiffany_Hwang_at_a_fansigning_in_Busan%2C_in_June_2016_06.jpg" />
						<Feed.Content>
							<Feed.Date content="3 days ago" />
							<Feed.Summary>
								You added <a>Molly Malone</a> as a friend.
							</Feed.Summary>
						</Feed.Content>
					</Feed.Event>

					<Feed.Event>
						<Feed.Label image="https://upload.wikimedia.org/wikipedia/commons/9/97/Tiffany_Hwang_at_a_fansigning_in_Busan%2C_in_June_2016_06.jpg" />
						<Feed.Content>
							<Feed.Date content="4 days ago" />
							<Feed.Summary>
								You added
								{" "}
								<a>Elliot Baker</a>
								{" "}
								to your
								{" "}
								<a>musicians</a>
								{" "}
								group.
							</Feed.Summary>
						</Feed.Content>
					</Feed.Event>
				</Feed>
			</Card.Content>
		</Card>
	</div>
);

export default Activity;

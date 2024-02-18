import prisma from "@/prisma/client";
import { Avatar, Card, Flex, Heading, Table, Text } from "@radix-ui/themes";
import { IssueStatusBadge } from "./components";
import Link from "next/link";

export const LatestIssues = async () => {
	const issues = await prisma.issue.findMany({
		orderBy: {
			createdAt: "desc",
		},
		take: 5,
		include: {
			assignedToUser: true,
		},
	});

	return (
		<Card>
			<Heading size="4" m="2">
				Latest Issues
			</Heading>
			<Table.Root>
				<Table.Body>
					{issues.map((issue) => (
						<Table.Row key={issue.id}>
							<Table.Cell>
								<Flex justify="between">
									<Flex
										direction="column"
										align="start"
										gap="1"
									>
										<Link href={`/issues/${issue.id}`}>
											{issue.title}
										</Link>
										<IssueStatusBadge
											status={issue.status}
										/>
									</Flex>
									{issue.assignedToUser && (
										<Flex align="center" gap="2">
											<Avatar
												src={
													issue.assignedToUser.image!
												}
												fallback="?"
												size="2"
												radius="full"
											/>
											<Text weight="medium">
												{issue.assignedToUser.name}
											</Text>
										</Flex>
									)}
								</Flex>
							</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Root>
		</Card>
	);
};

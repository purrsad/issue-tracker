"use client";

import { Issue, Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import toast from "react-hot-toast";

const statuses: { label: string; value?: Status }[] = [
	{ label: "Open", value: "OPEN" },
	{ label: "Closed", value: "CLOSED" },
	{ label: "In Progress", value: "IN_PROGRESS" },
];

const StatusSelect = ({ issue }: { issue: Issue }) => {
	const handleStatusChange = async (status: Status) => {
		try {
			await axios.patch("/api/issues/" + issue.id, {
				status,
			});
		} catch (error) {
			toast.error("Changes could not be saved.");
		}
	};

	return (
		<Select.Root
			defaultValue={issue.status}
			onValueChange={handleStatusChange}
		>
			<Select.Trigger placeholder="Change status" />
			<Select.Content>
				{statuses.map((status) => (
					<Select.Item key={status.label} value={status.value || ""}>
						{status.label}
					</Select.Item>
				))}
			</Select.Content>
		</Select.Root>
	);
};

export default StatusSelect;

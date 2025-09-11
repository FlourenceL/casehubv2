"use client";

import { IconCirclePlusFilled } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { SidebarMenuButton } from "@/components/ui/sidebar";

export function QuickCreateDialog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<SidebarMenuButton
					tooltip="Quick Create"
					className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
				>
					<IconCirclePlusFilled />
					<span>Quick Create</span>
				</SidebarMenuButton>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Quick Create</DialogTitle>
					<DialogDescription>
						Use this form to quickly create something new.
					</DialogDescription>
				</DialogHeader>
				{/* Replace with your form or actions */}
				<div className="space-y-2">
					<Button className="w-full">New Project</Button>
					<Button className="w-full">New Task</Button>
					<Button className="w-full">New Note</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}

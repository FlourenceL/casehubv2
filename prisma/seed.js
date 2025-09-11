import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
	// --- Users ---
	const alicePass = await bcrypt.hash("password123", 10);
	const bobPass = await bcrypt.hash("securePass!", 10);
	const charliePass = await bcrypt.hash("admin123", 10);

	await prisma.mst_user.createMany({
		data: [
			{ UserName: "Alice", Password: alicePass },
			{ UserName: "Bob", Password: bobPass },
			{ UserName: "Charlie", Password: charliePass },
		],
	});

	// --- Contact Details ---
	await prisma.mst_contact_details.createMany({
		data: [
			{ ContactPerson: "John Doe", ContactNumber: 123456789 },
			{ ContactPerson: "Jane Smith", ContactNumber: 987654321 },
			{ ContactPerson: "Mike Johnson", ContactNumber: 555444333 },
		],
	});

	// --- Documents ---
	await prisma.mst_document.createMany({
		data: [
			{ Document: "Birth Certificate" },
			{ Document: "Marriage License" },
			{ Document: "Property Deed" },
		],
	});

	// --- Document Types ---
	await prisma.mst_documenttype.createMany({
		data: [
			{ DocumentType: "Official", CreatedAt: new Date() },
			{ DocumentType: "Confidential", CreatedAt: new Date() },
			{ DocumentType: "Internal", CreatedAt: new Date() },
		],
	});

	// --- Logbook ---
	await prisma.mst_logbook.createMany({
		data: [
			{ Logbook: "Logbook A" },
			{ Logbook: "Logbook B" },
			{ Logbook: "Logbook C" },
		],
	});

	// --- Requesting Office ---
	await prisma.mst_requesting_office.createMany({
		data: [
			{ RequestingOffice: "Finance" },
			{ RequestingOffice: "HR" },
			{ RequestingOffice: "IT" },
		],
	});

	// --- SPMS ---
	await prisma.mst_spms.createMany({
		data: [
			{ Spms: "SPMS Alpha" },
			{ Spms: "SPMS Beta" },
			{ Spms: "SPMS Gamma" },
		],
	});

	// --- Status ---
	await prisma.mst_status.createMany({
		data: [
			{ Status: "Pending" },
			{ Status: "Approved" },
			{ Status: "Rejected" },
		],
	});

	// --- Files ---
	await prisma.trn_file.createMany({
		data: [
			{
				TitleSubjectPurpose: "Request for budget approval",
				DaysPending: 5,
				ActionTaken: "Reviewed by finance",
			},
			{
				TitleSubjectPurpose: "Leave application",
				DaysPending: 2,
				ActionTaken: "Forwarded to HR",
			},
			{
				TitleSubjectPurpose: "System upgrade proposal",
				DaysPending: 10,
				ActionTaken: "Pending IT approval",
			},
		],
	});
}

main()
	.then(async () => {
		console.log("Seeding completed ✅");
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});

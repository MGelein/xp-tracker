import { GOOGLE_API_KEY, GOOGLE_SHEET_ID } from '../secrets/credentials';
import { GoogleSpreadsheet } from 'google-spreadsheet';

export type Student = { name: string, xp: number, emoji: string };
export type Group = { name: string, students: Student[], xpTarget: number };

export async function loadDocument() {
    const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID);
    doc.useApiKey(GOOGLE_API_KEY);
    await doc.loadInfo();
    return doc;
}

export async function loadGroups() {
    const doc = await loadDocument();
    const groups: Group[] = [];
    for (let i = 0; i < doc.sheetCount; i++) {
        const sheet = doc.sheetsByIndex[i];
        await sheet.loadCells();
        const group: Group = {
            name: sheet.title,
            xpTarget: Number(sheet.getCell(1, 3).value),
            students: []
        };

        for (let index = 0; index < 100; index++) {
            const name = sheet.getCell(index + 1, 0).value as string;
            const xp = sheet.getCell(index + 1, 1).value as number;
            const emoji = sheet.getCell(index + 1, 2).value as string;
            if (name === null || xp === null) break;
            group.students.push({ name, xp, emoji })
        }
        groups.push(group);
    }
    return groups;
}
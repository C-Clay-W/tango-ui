// 这里供SSR页面使用的接口，用于直接操作数据库和获取数据库中的数据
import { db } from './mysql';

export async function getAllNames() {
    const [rows] = await db.query('SELECT * FROM art_name');
    return rows; 
}
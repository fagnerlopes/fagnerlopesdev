import { sql } from '@/lib/db'
import { NextResponse } from 'next/server'

export const runtime = 'edge'

// Inicializar tabela se não existir
async function initTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS visitors (
        id SERIAL PRIMARY KEY,
        count INTEGER DEFAULT 0,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `
    
    // Inserir registro inicial se não existir
    const result = await sql`SELECT COUNT(*) as count FROM visitors`
    if (result[0].count === '0') {
      await sql`INSERT INTO visitors (count) VALUES (0)`
    }
  } catch (error) {
    console.error('Erro ao inicializar tabela:', error)
  }
}

export async function GET() {
  try {
    await initTable()
    
    // Incrementar contador
    const result = await sql`
      UPDATE visitors 
      SET count = count + 1, updated_at = CURRENT_TIMESTAMP 
      WHERE id = 1 
      RETURNING count
    `
    
    return NextResponse.json({ 
      visitors: result[0].count,
      message: 'Contador de visitas atualizado com sucesso!'
    })
  } catch (error) {
    console.error('Erro ao buscar visitas:', error)
    return NextResponse.json(
      { error: 'Erro ao conectar com o banco de dados' },
      { status: 500 }
    )
  }
}


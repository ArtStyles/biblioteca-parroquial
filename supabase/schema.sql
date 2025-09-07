-- Crear tabla de libros
CREATE TABLE IF NOT EXISTS libros (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  editorial VARCHAR(255),
  autor VARCHAR(255) NOT NULL,
  clasificacion VARCHAR(100),
  ano_edicion INTEGER,
  folio VARCHAR(50),
  tomo VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear índices para mejorar el rendimiento
CREATE INDEX IF NOT EXISTS idx_libros_titulo ON libros(titulo);
CREATE INDEX IF NOT EXISTS idx_libros_autor ON libros(autor);
CREATE INDEX IF NOT EXISTS idx_libros_clasificacion ON libros(clasificacion);
CREATE INDEX IF NOT EXISTS idx_libros_ano_edicion ON libros(ano_edicion);
CREATE INDEX IF NOT EXISTS idx_libros_folio ON libros(folio);

-- Crear función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Crear trigger para actualizar updated_at
CREATE TRIGGER update_libros_updated_at 
    BEFORE UPDATE ON libros 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Insertar datos de ejemplo
INSERT INTO libros (titulo, editorial, autor, clasificacion, ano_edicion, folio, tomo) VALUES
('Cien años de soledad', 'Sudamericana', 'Gabriel García Márquez', 'Literatura', 1967, 'LIT-001', '1'),
('Don Quijote de la Mancha', 'Planeta', 'Miguel de Cervantes', 'Clásicos', 1605, 'CLA-001', '1-2'),
('Introducción a la Programación', 'McGraw Hill', 'John Smith', 'Tecnología', 2020, 'TEC-045', '1'),
('Historia Universal', 'Santillana', 'María González', 'Historia', 2018, 'HIS-023', '3'),
('La Biblia', 'Sociedades Bíblicas Unidas', 'Varios', 'Religión', 2020, 'REL-001', '1'),
('Suma Teológica', 'BAC', 'Santo Tomás de Aquino', 'Filosofía', 2015, 'FIL-001', '1-3');

-- Habilitar Row Level Security (RLS)
ALTER TABLE libros ENABLE ROW LEVEL SECURITY;

-- Crear política para permitir lectura pública
CREATE POLICY "Permitir lectura pública de libros" ON libros
    FOR SELECT USING (true);

-- Crear política para permitir inserción (solo para usuarios autenticados)
CREATE POLICY "Permitir inserción de libros" ON libros
    FOR INSERT WITH CHECK (true);

-- Crear política para permitir actualización (solo para usuarios autenticados)
CREATE POLICY "Permitir actualización de libros" ON libros
    FOR UPDATE USING (true);

-- Crear política para permitir eliminación (solo para usuarios autenticados)
CREATE POLICY "Permitir eliminación de libros" ON libros
    FOR DELETE USING (true);

import { Paper, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h4" fontWeight={900} gutterBottom>
        Bienvenido a la Gestiòn de Inventario 👋
      </Typography>

      <Typography color="text.secondary">
        Consulta, registra y realiza cálculos sobre los productos del inventario.
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Usa el menú superior (oscuro) para navegar entre páginas.
      </Typography>
    </Paper>
    
  );
}
import { useMemo, useState } from "react";
import { Paper, TextField, Typography } from "@mui/material";

export default function SumPage() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");

  const result = useMemo(() => a + b, [a, b]);

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        <p>REGISTRAR NUEVO PRODUCTO</p>
        
      </Typography>

      <TextField
        label="Nombre"
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
        sx={{ mr: 2, mb: 2 }}
      />
        <br>
        </br>
      <TextField
        label="Precio"
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
        sx={{ mb: 2 }}
      />
      <br>
      </br>
      <TextField
        label="Stock"
        type="number"
        value={b}
        onChange={(e) => setC(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Typography sx={{ mt: 1 }}>
               Guardar <strong>{result}</strong>
      </Typography>
    </Paper>
  );
}
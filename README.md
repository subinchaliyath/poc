# React + TypeScript + Vite
import React from 'react'; import { useForm, Controller, SubmitHandler } from 'react-hook-form'; import { TextField, Button, Checkbox, FormControlLabel, MenuItem, Select, InputLabel, FormControl } from '@mui/material'; interface IFormInput { policyNumber: string; city: string; insured: string; state: string; agent: string; hcnOption: string; includeCancelled: boolean; includeExpired: boolean; } const MyForm: React.FC = () => { const { control, handleSubmit, reset } = useForm<IFormInput>(); const onSubmit: SubmitHandler<IFormInput> = data => { console.log(data); }; return ( <form onSubmit={handleSubmit(onSubmit)}> {/* Policy Number */} <Controller name="policyNumber" control={control} defaultValue="" render={({ field }) => <TextField {...field} label="Policy Number" variant="outlined" />} /> {/* City */} <Controller name="city" control={control} defaultValue="" render={({ field }) => <TextField {...field} label="City" variant="outlined" />} /> {/* Insured */} <Controller name="insured" control={control} defaultValue="" render={({ field }) => <TextField {...field} label="Insured" variant="outlined" />} /> {/* State Dropdown */} <FormControl fullWidth> <InputLabel id="state-label">State</InputLabel> <Controller name="state" control={control} defaultValue="" render={({ field }) => ( <Select {...field} labelId="state-label" label="State"> <MenuItem value='NY'>New York</MenuItem> <MenuItem value='CA'>California</MenuItem> <MenuItem value='TX'>Texas</MenuItem> </Select> )} /> </FormControl> {/* Agent Dropdown */} <FormControl fullWidth> <InputLabel id="agent-label">Agent</InputLabel> <Controller name="agent" control={control} defaultValue="" render={({ field }) => ( <Select {...field} labelId="agent-label" label="Agent"> <MenuItem value='1'>Agent1</MenuItem> <MenuItem value='2'>Agent2</MenuItem> <MenuItem value='3'>Agent3</MenuItem> </Select> )} /> </FormControl> {/* HCN Option Dropdown */} <FormControl fullWidth> <InputLabel id="hcn-label">HCN Option</InputLabel> <Controller name="hcnOption" control={control} defaultValue="" render={({ field }) => ( <Select {...field} labelId="hcn-label" label="HCN Option"> <MenuItem value='1'>Option 1</MenuItem> <MenuItem value='2'>Option 2</MenuItem> </Select> )} /> </FormControl> {/* Checkboxes */} <Controller name="includeCancelled" control={control} defaultValue={false} render={({ field }) => ( <FormControlLabel {...field} control={<Checkbox checked={field.value} />} label="Include Cancelled Policies" /> )} /> <Controller name="includeExpired" control={control} defaultValue={false} render={({ field }) => ( <FormControlLabel {...field} control={<Checkbox checked={field.value} />} label="Include Expired Policies" /> )} /> {/* Buttons */} <Button type="submit" variant="contained" color="primary">Search</Button> <Button type="button" variant="outlined" onClick={() => reset()} >Clear</Button> </form> ); } export default MyForm;
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

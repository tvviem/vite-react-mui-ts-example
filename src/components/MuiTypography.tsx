import { Typography } from '@mui/material';

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 heading
      </Typography>
      <Typography variant="h5">h5 heading</Typography>
      <Typography variant="h6">h6 heading</Typography>
      <Typography variant="subtitle1">Sub title 1</Typography>
      <Typography variant="subtitle2">Sub title 2</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos at ea
        voluptatibus asperiores voluptatum doloribus, aut libero veniam adipisci
        dolorem nam! Quisquam consectetur, quae accusamus dolorem ipsum illum
        harum deserunt?
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veniam
        doloremque temporibus in possimus necessitatibus perferendis ex soluta
        eaque? Praesentium, minima? Nulla vero aut vitae facilis exercitationem
        non sed similique.
      </Typography>
    </div>
  );
};

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import type { Chart } from '../types/topology/Chart';
import { IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface SidebarProps {
  charts: Chart[];
  onSelect: (id: string) => void;
  onEdit: (chart: Chart) => void; 
}

export function ChartListSidebar({ charts, onSelect,onEdit }: SidebarProps) {
  return (
    <Box sx={{ width:250, flexShrink: 0, borderRight: '1px solid #ddd', height: '100%' }}>
      <List>
        {charts.map((chart) => (
          <ListItem key={chart.id} disablePadding
          secondaryAction={
              <IconButton edge="end" onClick={() => onEdit(chart)}>
                <ArrowForwardIosIcon/>
              </IconButton>
            }>
            <ListItemButton
              selected={false}
              onClick={() => onSelect(chart.id)}
            >
              <ListItemText primary={chart.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

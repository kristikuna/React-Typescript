import { useState, ChangeEvent } from 'react';
import { ITask } from './Interfaces';
import TodoTask from './components/TodoTask';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AlarmIcon from '@mui/icons-material/Alarm';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Kristi Byrnes
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function App() {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  //void = function does not return anything
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "task") {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  }

  const addTask = () => {
    const newTask = {
      taskName: task,
      deadline: deadline
    }
    setTodoList([...todoList, newTask]);
    setTask('')
    setDeadline(0)
  }

  const completeTask = (taskToComplete: string):void  => {
    setTodoList(todoList.filter((task) => {
      return task.taskName !== taskToComplete
    }))
  }

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     task: data.get('task'),
  //     deadline: data.get('deadline'),
  //   });
  // };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AlarmIcon />
          </Avatar>
          {/* <Avatar sx={{ bgcolor: deepPurple[500] }}>KB</Avatar> */}

          {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}> */}
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="task"
                  name="task"
                  required
                  fullWidth
                  id="task"
                  label="Task"
                  autoFocus
                  onChange={handleChange}
                  value={task}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="deadline"
                  label="Deadline (days)"
                  name="deadline"
                  autoComplete="deadline"
                  onChange={handleChange}
                  value={deadline}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={addTask}
            >
              Add Task
            </Button>
          </Box>
        </Box>
        <Box>
          {todoList.map((task: ITask, key: number) => {
            return <TodoTask completeTask={completeTask} key={key} task={task}/>;
          })}
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

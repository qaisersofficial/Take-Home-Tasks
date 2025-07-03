# Take Home Task
A beautiful, modern todo application built with React, Vite, and Supabase. Create, manage, and organize your tasks with a sleek interface and powerful features.

## Features

- **Beautiful UI/UX** - Clean, modern design with smooth animations
- **Color-coded Tasks** - Organize tasks with 9 different color options
- **Task Management** - Create, edit, complete, and delete tasks
- **Responsive Design** - Works perfectly on desktop and mobile
- **Real-time Updates** - Powered by Supabase for instant synchronization
- **Task Statistics** - Track your progress with completion counters
- **Smooth Transitions** - Micro-interactions and hover effects
- **Production Ready** - Optimized build and deployment


## Database Schema

The application uses a single `tasks` table with the following structure:

```sql
CREATE TABLE tasks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  color text DEFAULT 'blue',
  completed boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```
- **Row Level Security (RLS)** enabled for data protection
- **Auto-updating timestamps** with triggers
- **Public access policy** (no authentication required)
- **UUID primary keys** for better scalability

## Live Demo

**[View Live Application](https://take-home-tasks.netlify.app/)**

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Deployment**: Netlify
- **Language**: JavaScript/JSX

### Task Colors:
- Red: `#FF3B30`
- Orange: `#FF9500`
- Yellow: `#FFCC00`
- Green: `#34C759`
- Blue: `#007AFF`
- Indigo: `#5856D6`
- Purple: `#AF52DE`
- Pink: `#FF2D55`
- Brown: `#A2845E`

## Deployment

The application is automatically deployed to Netlify:

1. **Build Command**: `npm run build`
2. **Publish Directory**: `dist`
3. **Environment Variables**: Set in Netlify dashboard
4. **Auto Deploy**: Connected to Git repository

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Acknowledgments

- **Design Inspiration**: Modern task management applications
- **Icons**: [Lucide React](https://lucide.dev/)
- **Database**: [Supabase](https://supabase.com/)
- **Hosting**: [Netlify](https://netlify.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Design**: [Figma](https://www.figma.com/design/zHgJzVHfhuN720CjjSGRXQ/Todo-App-Test-Task?node-id=1-198&t=4Nc4JoFE8POQ3GEc-0)
- **Product Requirements Document**: [Notion](https://large-canvas-a32.notion.site/Fullstack-Take-Home-Task-15a12d651923800a9f00fe81a69f84cd)

##  Support

If you have any questions or need help, please open an issue in the repository.

---

**[Portfolio](https://qaisersofficial.netlify.app/)** | **[ Report Bug](issues)**
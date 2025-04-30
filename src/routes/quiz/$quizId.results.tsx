import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/quiz/$quizId/results')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/quiz/$quizId/results"!</div>
}

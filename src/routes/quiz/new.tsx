import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/quiz/new')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/quiz/new"!</div>
}

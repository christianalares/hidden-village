import { startWorkers } from '@hidden-village/jobs/worker'

const shutdown = await startWorkers()

async function stop() {
  await shutdown()
  process.exit(0)
}

process.on('SIGINT', () => {
  void stop()
})

process.on('SIGTERM', () => {
  void stop()
})

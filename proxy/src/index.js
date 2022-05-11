import { Middleware } from './proxyExecutions/middleware'
import assert from 'assert';

export default function proxy(host, options, handlers) {
  assert(host, "Host should't be empty")
  return Middleware(
    host,
    Object.assign({ changeOrigin: true, enableLogging: true }, options || {}),
    handlers
  );
}

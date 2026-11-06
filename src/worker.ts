// Cloudflare Worker entry. The cron trigger in wrangler.jsonc calls scheduled() to publish scheduled EmDash posts.
import handler, { createScheduledHandler, PluginBridge } from '@emdash-cms/cloudflare/worker';

export { PluginBridge };

export default {
	...handler,
	scheduled: createScheduledHandler(),
} satisfies ExportedHandler;

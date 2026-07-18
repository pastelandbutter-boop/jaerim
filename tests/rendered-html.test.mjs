import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Jaerim landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Learn Korean with Jaerim \| 1:1 Online Lessons<\/title>/i);
  assert.match(html, /About My Lessons/);
  assert.match(html, /Lesson Packages/);
  assert.match(html, /Current Availability/);
  assert.match(html, /Apply for Lessons/);
  assert.match(html, /Frequently Asked Questions/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

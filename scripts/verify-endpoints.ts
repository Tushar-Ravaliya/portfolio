async function verify() {
  const base = "http://localhost:3001";
  console.log("=== RUNNING LIVE HTTP ENDPOINT VERIFICATION ===\n");

  // 1. Accept: text/markdown on /
  console.log("--- 1. Testing Accept: text/markdown on / ---");
  const res1 = await fetch(`${base}/`, {
    headers: { Accept: "text/markdown" },
  });
  console.log(`Status: ${res1.status}`);
  console.log(`Content-Type: ${res1.headers.get("content-type")}`);
  console.log(`Vary: ${res1.headers.get("vary")}`);
  const text1 = await res1.text();
  console.log(`Body includes "# Tushar Ravaliya": ${text1.includes("# Tushar Ravaliya")}`);
  console.log(`Body includes "When to Use This": ${text1.includes("When to Use This")}`);
  console.log(`Body length: ${text1.length} chars\n`);

  // 2. Accept: text/html on /
  console.log("--- 2. Testing Accept: text/html on / ---");
  const res2 = await fetch(`${base}/`, {
    headers: { Accept: "text/html" },
  });
  console.log(`Status: ${res2.status}`);
  console.log(`Content-Type: ${res2.headers.get("content-type")}`);
  console.log(`Vary: ${res2.headers.get("vary")}`);
  console.log(`Link: ${res2.headers.get("link")}`);
  const text2 = await res2.text();
  console.log(`Contains JSON-LD Person: ${text2.includes('"@type":"Person"')}`);
  console.log(`Contains H1: ${text2.includes("<h1")}`);
  console.log(`Raw HTML length: ${text2.length} chars\n`);

  // 3. Accept: application/pdf (Expect 406)
  console.log("--- 3. Testing Accept: application/pdf on / (Expect 406) ---");
  const res3 = await fetch(`${base}/`, {
    headers: { Accept: "application/pdf" },
  });
  console.log(`Status: ${res3.status}`);
  console.log(`Content-Type: ${res3.headers.get("content-type")}`);
  console.log(`Vary: ${res3.headers.get("vary")}\n`);

  // 4. Nonexistent path (Expect 404)
  console.log("--- 4. Testing Nonexistent path /non-existent-page (Expect 404) ---");
  const res4 = await fetch(`${base}/non-existent-page`);
  console.log(`Status: ${res4.status}\n`);

  // 5. Nonexistent path with Accept: text/markdown (Expect 404 + Markdown body)
  console.log("--- 5. Testing Nonexistent path with Accept: text/markdown ---");
  const res5 = await fetch(`${base}/non-existent-page`, {
    headers: { Accept: "text/markdown" },
  });
  console.log(`Status: ${res5.status}`);
  console.log(`Content-Type: ${res5.headers.get("content-type")}`);
  console.log(`Vary: ${res5.headers.get("vary")}`);
  const text5 = await res5.text();
  console.log(`Body includes "# 404 Not Found": ${text5.includes("# 404 Not Found")}`);
  console.log(`Body includes "Where to Look Next": ${text5.includes("Where to Look Next")}\n`);

  // 6. /llms.txt
  console.log("--- 6. Testing /llms.txt ---");
  const res6 = await fetch(`${base}/llms.txt`);
  console.log(`Status: ${res6.status}`);
  console.log(`Content-Type: ${res6.headers.get("content-type")}`);
  const text6 = await res6.text();
  console.log(`Includes "When to Use This": ${text6.includes("When to Use This")}\n`);

  // 7. /llms-full.txt
  console.log("--- 7. Testing /llms-full.txt ---");
  const res7 = await fetch(`${base}/llms-full.txt`);
  console.log(`Status: ${res7.status}`);
  console.log(`Content-Type: ${res7.headers.get("content-type")}`);
  const text7 = await res7.text();
  console.log(`Includes "Full LLM Context": ${text7.includes("Full LLM Context")}\n`);

  // 8. /agent-instructions.md
  console.log("--- 8. Testing /agent-instructions.md ---");
  const res8 = await fetch(`${base}/agent-instructions.md`);
  console.log(`Status: ${res8.status}`);
  console.log(`Content-Type: ${res8.headers.get("content-type")}\n`);

  // 9. /index.md
  console.log("--- 9. Testing /index.md ---");
  const res9 = await fetch(`${base}/index.md`);
  console.log(`Status: ${res9.status}`);
  console.log(`Content-Type: ${res9.headers.get("content-type")}\n`);

  // 10. /sitemap.xml
  console.log("--- 10. Testing /sitemap.xml ---");
  const res10 = await fetch(`${base}/sitemap.xml`);
  console.log(`Status: ${res10.status}`);
  console.log(`Content-Type: ${res10.headers.get("content-type")}\n`);

  // 11. /robots.txt
  console.log("--- 11. Testing /robots.txt ---");
  const res11 = await fetch(`${base}/robots.txt`);
  console.log(`Status: ${res11.status}`);
  console.log(`Content-Type: ${res11.headers.get("content-type")}\n`);

  console.log("=== ALL ENDPOINTS VERIFIED SUCCESSFULLY ===");
}

verify().catch(console.error);

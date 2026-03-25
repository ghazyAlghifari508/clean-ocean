const apiKey = "MP1019BHC1PKEH77GKYWV5D79X04P219EXIU";
const url = "https://eachsense-agent.core.eachlabs.run/v1/chat/completions";

console.log("Starting model generation request...");

try {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "eachsense/beta",
      messages: [
        { 
          role: "user", 
          content: "Generate a 3D model of a tropical beach environment with golden sand and scattered small rocks. Style: realistic, low-poly. Output a downloadable .glb or .gltf file URL." 
        }
      ],
      stream: false
    })
  });

  if (!response.ok) {
    const text = await response.text();
    console.error(`HTTP Error: ${response.status} ${response.statusText}`);
    console.error(text);
    process.exit(1);
  }

  const data = await response.json();
  console.log("Success! Response from EachLabs:");
  console.log(JSON.stringify(data, null, 2));
} catch (error) {
  console.error("Fetch failed:", error);
}

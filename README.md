# Email Writer AI — Chrome Extension Frontend

Client-side browser automation for **Email Writer AI**. [Live App / Extension](https://chromewebstore.google.com/detail/email-writer/nefgnkboedlacmpgbkgjoknjeigpppln) · [Backend repo](https://github.com/icas00/AI-Email-Writer-backend)

## Tech Stack
- **React**
- **Chrome Extension (Manifest V3)**
- **MutationObserver** — DOM watching inside Gmail

## How It Works
- Injects a React UI directly into Gmail's DOM using `MutationObserver`, handling Gmail's frequent UI re-renders gracefully.
- Uses DOM-based context extraction to reliably capture the active email thread.
- Sends extracted context to the [backend](https://github.com/icas00/AI-Email-Writer-backend) to generate a reply via the Gemini API.
- Uses LocalStorage-based client-side caching and optimized request payloads, cutting email drafting time by ~80%.

## Getting Started
```bash
npm install
npm run build
```
Load the built extension as an unpacked extension in Chrome (`chrome://extensions` → Developer mode → Load unpacked).

## Related
- Backend: [AI-Email-Writer-backend](https://github.com/icas00/AI-Email-Writer-backend) — stateless, privacy-first Spring Boot API
- Privacy policy: [email-writer-privacy](https://github.com/icas00/email-writer-privacy)

## License
MIT — see [LICENSE](LICENSE).

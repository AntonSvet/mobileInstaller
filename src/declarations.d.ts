declare module "*.svg" {
  const content: string;
  export default content;
}
declare module "*.png" {
  const content: string;
  export default content;
}
declare module "./serviceWorkerRegistration" {
  export function register(config?: any): void;
  export function unregister(): void;
}
declare namespace NodeJS {
  interface ProcessEnv {
    PUBLIC_URL: string;
  }
}
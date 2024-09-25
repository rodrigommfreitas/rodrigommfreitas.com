export function formatToLogoURL(str: string) {
  return (
    "/logos/" +
    str
      .toLowerCase() // Convert everything to lowercase
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/\./g, "-") +
    ".svg"
  ); // Replace dots with hyphens // Append '-logo.svg' at the end
}

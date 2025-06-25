// %======================== utils ========================% //

export const toCamelCase = (str: string): string => str.replace(/-./g, x => x[1].toUpperCase());

// %------------------------ generate paths for images ------------------------% //
export const generatePaths = (basePath: string, endPaths: string[], extension?: string): Record<string, string> => {
  return endPaths.reduce((acc, endPath) => {
    const formattedPath = extension ? `${endPath}${extension}` : endPath;
    acc[toCamelCase(endPath.replace(/\.[^.]+$/, ''))] = `${basePath}/${formattedPath}`;
    return acc;
  }, {} as Record<string, string>);
};
export function classNames(...classes: string[]): string {
  if (Array.isArray(classes)) {
    return classes.join(' ')
  }

  return classes
}

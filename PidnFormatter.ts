export const PidnFormatter: (string, boolean?) => string = (
  value: string,
  toApi?: boolean,
) => {
  if (toApi) {
    return value ? value.toString().replace(/\D/g, '') : undefined
  }
  if (!value) {
    return ''
  }
  const formatted = value.replace(/\D/g, '')
  if (formatted.length > 8) {
    return formatted.slice(0, 8) + '-' + formatted.slice(8)
  }
  return formatted
}

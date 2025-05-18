export function formatDateToLongString(date: string | Date): string {
    const d = new Date(date)
  
    return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(d)
  }
  
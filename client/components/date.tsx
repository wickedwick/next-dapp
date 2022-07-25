import { format } from 'date-fns'

const DateFormatter = ({ dateString }: { dateString: string }): JSX.Element => {
  const date = new Date(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

export default DateFormatter

export default {
  overrides: {
    '*.created_at': 'GeneratedAlways<Date>',
    '*.updated_at': 'ColumnType<Date | null, never, Date>'
  }
}

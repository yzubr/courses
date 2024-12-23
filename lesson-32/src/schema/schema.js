import { maxLength, minLength, nonEmpty, object, pipe, regex, string, trim } from 'valibot'

export default object({
  name: pipe(
    string(),
    trim(),
    nonEmpty('Please provide a name'),
    minLength(5, 'Please ensure the name is at least 5 characters long'),
    maxLength(50, 'Please ensure the name is at most 50 characters long'),
    regex(/^[A-Za-z-_]+$/, 'Category name must contain only letters.')
  ),
  slug: pipe(
    string(),
    trim(),
    nonEmpty('Please provide a slug'),
    minLength(5, 'Please ensure the slug is at least 5 characters long'),
    maxLength(50, 'Please ensure the slug is at most 50 characters long'),
    regex(/^[A-Za-z-_]+$/, 'Slug must contain only letters.')
  )
})

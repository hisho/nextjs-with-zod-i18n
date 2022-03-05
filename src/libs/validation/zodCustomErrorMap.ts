import { z } from 'zod'
import type { UseLocaleResult } from '@src/hooks/useLocale'

export const zodCustomErrorMap =
  (locale: UseLocaleResult['locale']): z.ZodErrorMap =>
  (issue, ctx) => {
    /**
     * enの場合はDefaultエラー内容を返す
     */
    if (locale === 'en') {
      return { message: ctx.defaultError }
    }
    switch (issue.code) {
      case z.ZodIssueCode.invalid_type:
        if (issue.received === 'undefined') {
          return {
            message: locale === 'ja' ? '必須' : ctx.defaultError,
          }
        } else {
          return {
            message: `Expected ${issue.expected}, received ${issue.received}`,
          }
        }
      case z.ZodIssueCode.unrecognized_keys:
        return {
          message: `Unrecognized key(s) in object: ${issue.keys
            .map((k) => `'${k}'`)
            .join(', ')}`,
        }
      case z.ZodIssueCode.invalid_union:
        return {
          message: `Invalid input`,
        }
      case z.ZodIssueCode.invalid_union_discriminator:
        return {
          message: `Invalid discriminator value. Expected ${issue.options
            .map((val) => (typeof val === 'string' ? `'${val}'` : val))
            .join(' | ')}`,
        }
      case z.ZodIssueCode.invalid_enum_value:
        return {
          message: `Invalid enum value. Expected ${issue.options
            .map((val) => (typeof val === 'string' ? `'${val}'` : val))
            .join(' | ')}`,
        }
      case z.ZodIssueCode.invalid_arguments:
        return {
          message: `Invalid function arguments`,
        }
      case z.ZodIssueCode.invalid_return_type:
        return {
          message: `Invalid function return type`,
        }
      case z.ZodIssueCode.invalid_date:
        return {
          message: `Invalid date`,
        }
      case z.ZodIssueCode.invalid_string:
        if (issue.validation !== 'regex') {
          return {
            message: `Invalid ${issue.validation}`,
          }
        } else {
          return {
            message: 'Invalid',
          }
        }
      case z.ZodIssueCode.too_small:
        if (issue.type === 'array') {
          return {
            message: `Array must contain ${
              issue.inclusive ? `at least` : `more than`
            } ${issue.minimum} element(s)`,
          }
        } else if (issue.type === 'string') {
          return {
            message: `String must contain ${
              issue.inclusive ? `at least` : `over`
            } ${issue.minimum} character(s)`,
          }
        } else if (issue.type === 'number') {
          return {
            message: `Number must be greater than ${
              issue.inclusive ? `or equal to ` : ``
            }${issue.minimum}`,
          }
        } else {
          return { message: 'Invalid input' }
        }
      case z.ZodIssueCode.too_big:
        if (issue.type === 'array') {
          return {
            message: `Array must contain ${
              issue.inclusive ? `at most` : `less than`
            } ${issue.maximum} element(s)`,
          }
        } else if (issue.type === 'string') {
          return {
            message: `String must contain ${
              issue.inclusive ? `at most` : `under`
            } ${issue.maximum} character(s)`,
          }
        } else if (issue.type === 'number') {
          return {
            message: `Number must be less than ${
              issue.inclusive ? `or equal to ` : ``
            }${issue.maximum}`,
          }
        } else {
          return {
            message: 'Invalid input',
          }
        }
      case z.ZodIssueCode.custom:
        return {
          message: `Invalid input`,
        }
      case z.ZodIssueCode.invalid_intersection_types:
        return {
          message: `Intersection results could not be merged`,
        }
      case z.ZodIssueCode.not_multiple_of:
        return {
          message: `Number must be a multiple of ${issue.multipleOf}`,
        }
      default:
        return { message: ctx.defaultError }
    }
  }

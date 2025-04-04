# Input Validation Template

## Schema Validation
```typescript
const {{schemaName}} = z.object({
    {{validationRules}}
});
```

## Custom Validators
```typescript
const {{validatorName}} = (value: any): boolean => {
    {{validationLogic}}
};
```

## Error Messages
```typescript
const {{errorMessages}} = {
    {{errorDefinitions}}
};
```

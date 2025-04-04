# Unit Test Template

## Test Setup
```typescript
describe('{{testSubject}}', () => {
    let {{testVariables}};

    beforeEach(() => {
        {{setupCode}}
    });

    afterEach(() => {
        {{teardownCode}}
    });
```

## Test Cases
```typescript
    it('should {{testCase}}', async () => {
        // Arrange
        {{arrangeCode}}

        // Act
        {{actCode}}

        // Assert
        {{assertCode}}
    });
```

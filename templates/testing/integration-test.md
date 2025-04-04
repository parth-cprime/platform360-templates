# Integration Test Template

## Test Environment
```typescript
describe('{{integrationTest}}', () => {
    let {{testVariables}};

    beforeAll(async () => {
        {{setupEnvironment}}
    });

    afterAll(async () => {
        {{teardownEnvironment}}
    });
```

## Test Scenarios
```typescript
    it('should {{scenario}}', async () => {
        // Setup
        {{setupCode}}

        // Execute
        {{executeCode}}

        // Verify
        {{verifyCode}}
    });
```

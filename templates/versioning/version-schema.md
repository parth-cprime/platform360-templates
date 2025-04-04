# Version Schema Template

## Version Information
```json
{
    "version": "{{major}}.{{minor}}.{{patch}}",
    "releaseDate": "{{date}}",
    "changes": [
        {
            "type": "{{changeType}}",
            "description": "{{description}}",
            "ticket": "{{ticketId}}"
        }
    ],
    "dependencies": {
        {{dependencies}}
    }
}
```

## Migration Guide
```markdown
## Upgrading to {{version}}

### Breaking Changes
{{breakingChanges}}

### New Features
{{newFeatures}}

### Bug Fixes
{{bugFixes}}

### Deprecations
{{deprecations}}
```

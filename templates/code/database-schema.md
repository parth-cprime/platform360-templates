# Database Schema Template

## Table Definition
```sql
CREATE TABLE {{tableName}} (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    {{fields}}
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    version INTEGER DEFAULT 1
);
```

## Indexes
```sql
{{indexes}}
```

## Relationships
```sql
{{relationships}}
```

## Migrations
```sql
{{migrations}}
```

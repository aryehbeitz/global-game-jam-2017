export const menuConfig = [
    {
        url: 'console',
        label: 'Console',
        icon: 'console',
        children: [
            {
                url: 'events',
                label: 'Events'
            },
            {
                url: 'findings',
                label: 'Findings'
            },
            {
                url: 'reports',
                label: 'Reports'
            }
        ]
    },
    {
        url: 'analytics',
        label: 'Analytics',
        icon: 'analytics',
        children: [
            {
                url: 'application-mapping',
                label: 'Application Mapping'
            },
            {
                url: 'database-risk',
                label: 'Database Risk'
            },
            {
                url: 'finding-explorer',
                label: 'Finding Explorer'
            }
        ]
    },
    {
        url: 'admin',
        label: 'Administration',
        icon: 'admin',
        children: [
            {
                url: 'access-control',
                label: 'Access Control',
                children: [
                    {
                        url: 'users/',
                        label: 'Users'
                    }
                ]
            },
            {
                url: 'troubleshooting',
                label: 'Troubleshooting'
            },
            {
                url: 'index-management',
                label: 'Index Management'
            },
            {
                url: 'interfaces',
                label: 'Interfaces',
                children: [
                    {
                        url: 'ldap-configuration',
                        label: 'LDAP Configuration',
                    }
                ]
            },
        ]
    }
];
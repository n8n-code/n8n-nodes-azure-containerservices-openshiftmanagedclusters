import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureContainerservicesOpenshiftmanagedclusters implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Containerservices Openshiftmanagedclusters',
                name: 'N8nDevAzureContainerservicesOpenshiftmanagedclusters',
                icon: { light: 'file:./azure-containerservices-openshiftmanagedclusters.png', dark: 'file:./azure-containerservices-openshiftmanagedclusters.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Container Service Client.',
                defaults: { name: 'Azure Containerservices Openshiftmanagedclusters' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureContainerservicesOpenshiftmanagedclustersApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}

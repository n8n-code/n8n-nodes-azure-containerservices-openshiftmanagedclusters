import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureContainerservicesOpenshiftmanagedclustersApi implements ICredentialType {
        name = 'N8nDevAzureContainerservicesOpenshiftmanagedclustersApi';

        displayName = 'Azure Containerservices Openshiftmanagedclusters API';

        icon: Icon = { light: 'file:../nodes/AzureContainerservicesOpenshiftmanagedclusters/azure-containerservices-openshiftmanagedclusters.png', dark: 'file:../nodes/AzureContainerservicesOpenshiftmanagedclusters/azure-containerservices-openshiftmanagedclusters.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Containerservices Openshiftmanagedclusters API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}

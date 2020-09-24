export default {
  TIME_STAMP: 1566562129,
  clusters: {
    host: {
      'apis/clusterregistry.k8s.io/v1alpha1/namespaces/openshift-migration/clusters': {
        source: {
          apiVersion: 'clusterregistry.k8s.io/v1alpha1',
          kind: 'Cluster',
          metadata: {
            creationTimestamp: '2019-08-22T14:14:19Z',
            generation: 1,
            name: 'source',
            namespace: 'openshift-migration',
            resourceVersion: '435319',
            selfLink:
              '/apis/clusterregistry.k8s.io/v1alpha1/namespaces/openshift-migration/clusters/source',
            uid: '21e15fc9-c4e7-11e9-b418-0a82c596e194',
          },
          spec: {
            kubernetesApiEndpoints: {
              serverEndpoints: [
                {
                  clientCIDR: '0.0.0.0',
                  serverAddress: 'https://master.demo-source.mg.dog8code.com:443',
                },
              ],
            },
          },
        },
      },
      'apis/migration.openshift.io/v1alpha1/namespaces/openshift-migration/migclusters': {
        host: {
          apiVersion: 'migration.openshift.io/v1alpha1',
          kind: 'MigCluster',
          metadata: {
            annotations: {
              'operator-sdk/primary-resource': 'openshift-migration-operator/migration-controller',
              'operator-sdk/primary-resource-type': 'MigrationController.migration.openshift.io',
              touch: '1ee308e5-f4e9-4d93-a0ad-1183d18ed532',
            },
            creationTimestamp: '2019-08-22T14:12:08Z',
            finalizers: ['openshift.io/migration'],
            generation: 146,
            name: 'host',
            namespace: 'openshift-migration',
            resourceVersion: '755779',
            selfLink:
              '/apis/migration.openshift.io/v1alpha1/namespaces/openshift-migration/migclusters/host',
            uid: 'd38c6798-c4e6-11e9-b418-0a82c596e194',
          },
          spec: {
            isHostCluster: true,
            storageClasses: [
              {
                accessModes: ['ReadWriteOnce'],
                default: true,
                name: 'gp2',
                provisioner: 'kubernetes.io/aws-ebs',
              },
              {
                accessModes: ['ReadWriteOnce'],
                default: true,
                name: 'gp2-copy',
                provisioner: 'kubernetes.io/aws-ebs',
              },
            ],
          },
          status: {
            conditions: [
              {
                category: 'Required',
                lastTransitionTime: '2019-08-22T14:12:24Z',
                message: 'The cluster is ready.',
                status: 'True',
                type: 'Ready',
              },
            ],
          },
        },
        source: {
          apiVersion: 'migration.openshift.io/v1alpha1',
          kind: 'MigCluster',
          metadata: {
            annotations: {
              touch: '8ae7ec40-927d-4a75-ac70-2d92cffe1b5f',
            },
            creationTimestamp: '2019-08-22T14:14:19Z',
            finalizers: ['openshift.io/migration'],
            generation: 4,
            name: 'source',
            namespace: 'openshift-migration',
            resourceVersion: '761029',
            selfLink:
              '/apis/migration.openshift.io/v1alpha1/namespaces/openshift-migration/migclusters/source',
            uid: '21e02872-c4e7-11e9-b418-0a82c596e194',
          },
          spec: {
            clusterRef: {
              name: 'source',
              namespace: 'openshift-migration',
            },
            isHostCluster: false,
            serviceAccountSecretRef: {
              name: 'source',
              namespace: 'openshift-migration-operator',
            },
          },
          status: {
            conditions: [
              {
                category: 'Required',
                lastTransitionTime: '2019-08-22T14:14:21Z',
                message: 'The cluster is ready.',
                status: 'True',
                type: 'Ready',
              },
            ],
          },
        },
      },
      'apis/migration.openshift.io/v1alpha1/namespaces/openshift-migration/migmigrations': {},
      'apis/migration.openshift.io/v1alpha1/namespaces/openshift-migration/migplans': {},
      'apis/migration.openshift.io/v1alpha1/namespaces/openshift-migration/migstorages': {
        bucket: {
          apiVersion: 'migration.openshift.io/v1alpha1',
          kind: 'MigStorage',
          metadata: {
            annotations: {
              touch: 'a135593e-e6b0-41ba-88fb-ecdf885ee932',
            },
            creationTimestamp: '2019-08-23T07:39:42Z',
            generation: 2,
            name: 'bucket',
            namespace: 'openshift-migration',
            resourceVersion: '731417',
            selfLink:
              '/apis/migration.openshift.io/v1alpha1/namespaces/openshift-migration/migstorages/bucket',
            uid: '2bccdd36-c579-11e9-b862-024008363f5e',
          },
          spec: {
            backupStorageConfig: {
              awsBucketName: 'ocp-workshop-dgr-ui-source-3',
              awsRegion: 'eu-central-1',
              credsSecretRef: {
                name: 'bucket',
                namespace: 'openshift-migration-operator',
              },
            },
            backupStorageProvider: 'aws',
            volumeSnapshotConfig: {
              awsRegion: 'eu-central-1',
              credsSecretRef: {
                name: 'bucket',
                namespace: 'openshift-migration-operator',
              },
            },
            volumeSnapshotProvider: 'aws',
          },
          status: {
            conditions: [
              {
                category: 'Required',
                lastTransitionTime: '2019-08-23T07:39:42Z',
                message: 'The storage is ready.',
                status: 'True',
                type: 'Ready',
              },
            ],
          },
        },
      },
      'api/v1/namespaces/openshift-migration-operator/secrets': {
        bucket: {
          kind: 'Secret',
          apiVersion: 'v1',
          metadata: {
            name: 'bucket',
            namespace: 'openshift-migration-operator',
            selfLink: '/api/v1/namespaces/openshift-migration-operator/secrets/bucket',
            uid: '0c92e56e-c4e7-11e9-bbed-06ab32897ee4',
            resourceVersion: '435180',
            creationTimestamp: '2019-08-22T14:13:43Z',
          },
          data: {
            'aws-access-key-id': 'bW9ja2VkLWRhdGE=',
            'aws-secret-access-key': 'bW9ja2VkLWRhdGE=',
          },
          type: 'Opaque',
        },
        source: {
          kind: 'Secret',
          apiVersion: 'v1',
          metadata: {
            name: 'source',
            namespace: 'openshift-migration-operator',
            selfLink: '/api/v1/namespaces/openshift-migration-operator/secrets/source',
            uid: '21dff140-c4e7-11e9-bbed-06ab32897ee4',
            resourceVersion: '435316',
            creationTimestamp: '2019-08-22T14:14:19Z',
          },
          data: {
            saToken:
              'ZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNklpSjkuZXlKcGMzTWlPaUpyZFdKbGNtNWxkR1Z6TDNObGNuWnBZMlZoWTJOdmRXNTBJaXdpYTNWaVpYSnVaWFJsY3k1cGJ5OXpaWEoyYVdObFlXTmpiM1Z1ZEM5dVlXMWxjM0JoWTJVaU9pSnZjR1Z1YzJocFpuUXRiV2xuY21GMGFXOXVMVzl3WlhKaGRHOXlJaXdpYTNWaVpYSnVaWFJsY3k1cGJ5OXpaWEoyYVdObFlXTmpiM1Z1ZEM5elpXTnlaWFF1Ym1GdFpTSTZJbTFwWnkxMGIydGxiaTFqZDNSNmVDSXNJbXQxWW1WeWJtVjBaWE11YVc4dmMyVnlkbWxqWldGalkyOTFiblF2YzJWeWRtbGpaUzFoWTJOdmRXNTBMbTVoYldVaU9pSnRhV2NpTENKcmRXSmxjbTVsZEdWekxtbHZMM05sY25acFkyVmhZMk52ZFc1MEwzTmxjblpwWTJVdFlXTmpiM1Z1ZEM1MWFXUWlPaUkzWTJNeU1UZzFPQzFqTkRSbExURXhaVGt0WWpBelppMHdZVFU0WVdJNE9HUmxNekFpTENKemRXSWlPaUp6ZVhOMFpXMDZjMlZ5ZG1salpXRmpZMjkxYm5RNmIzQmxibk5vYVdaMExXMXBaM0poZEdsdmJpMXZjR1Z5WVhSdmNqcHRhV2NpZlEuZUVmcHdmbDR1eTRWV19nTGtzQi1kSGtSTTNnYUdNa0JaWWNfNUwwbngxZkwtU3dmdmxQdlRGZzhBNWhwSXFLdllUVzVuQWZsNC1PdEFmNVZSdDZzZFhfNFhaMS1xZmwwVy1rWVJnZ0JkbTE5VWNlellOYWREWHJSblYwRjdJdUtWQ0toNXV4VTJtNlRmZG5udktYcV9LVzhGa1E4UWRCbm0xdV9xdEVDejFGTVJ5Y1dObjdycFlPVXZBUlZHUWJLOE1Ka2k5MTJ6bHJ5blQxUUdsS2ROSnAyTnpLd2c2akFHRE5kb2MxNkpHTDM2QnM0SlUxd2FxSlUxczQyRlgxM2xOVV83ZGttdHg5X3BqQm5VWUxLUlNuOHNSMXlVZlZMNFJGaGVzcnBFTTI5RHdGdERXSWcxWjNUNmtDaE9NRXpaNFZ0Y0dBWlhSMXc0SjgxTVB6elJ3',
          },
          type: 'Opaque',
        },
      },
      'api/v1/namespaces': {
        default: {
          metadata: {
            name: 'default',
            selfLink: '/api/v1/namespaces/default',
            uid: '49886dff-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7150',
            creationTimestamp: '2019-08-21T09:37:26Z',
            annotations: {
              'openshift.io/sa.scc.mcs': 's0:c17,c4',
              'openshift.io/sa.scc.supplemental-groups': '1000280000/10000',
              'openshift.io/sa.scc.uid-range': '1000280000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'kube-public': {
          metadata: {
            name: 'kube-public',
            selfLink: '/api/v1/namespaces/kube-public',
            uid: '47bffe55-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '6912',
            creationTimestamp: '2019-08-21T09:37:23Z',
            annotations: {
              'openshift.io/sa.scc.mcs': 's0:c1,c0',
              'openshift.io/sa.scc.supplemental-groups': '1000000000/10000',
              'openshift.io/sa.scc.uid-range': '1000000000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'kube-system': {
          metadata: {
            name: 'kube-system',
            selfLink: '/api/v1/namespaces/kube-system',
            uid: '47be36fc-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7051',
            creationTimestamp: '2019-08-21T09:37:23Z',
            annotations: {
              'openshift.io/sa.scc.mcs': 's0:c9,c4',
              'openshift.io/sa.scc.supplemental-groups': '1000080000/10000',
              'openshift.io/sa.scc.uid-range': '1000080000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'mssql-persistent': {
          metadata: {
            name: 'mssql-persistent',
            selfLink: '/api/v1/namespaces/mssql-persistent',
            uid: '0e13146d-c44f-11e9-a43a-024008363f5e',
            resourceVersion: '165999',
            creationTimestamp: '2019-08-21T20:05:42Z',
            labels: {
              app: 'mssql-container',
            },
            annotations: {
              'alm-manager': 'operator-lifecycle-manager.olm-operator',
              'kubectl.kubernetes.io/last-applied-configuration':
                '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{},"labels":{"app":"mssql-container"},"name":"mssql-persistent","namespace":""}}\n',
              'openshift.io/backup-registry-hostname': 'docker-registry.default.svc:5000',
              'openshift.io/backup-server-version': '1.11',
              'openshift.io/sa.scc.mcs': 's0:c18,c12',
              'openshift.io/sa.scc.supplemental-groups': '1000330000/10000',
              'openshift.io/sa.scc.uid-range': '1000330000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        openshift: {
          metadata: {
            name: 'openshift',
            selfLink: '/api/v1/namespaces/openshift',
            uid: '024d954f-c3f8-11e9-8762-06ab32897ee4',
            resourceVersion: '7131',
            creationTimestamp: '2019-08-21T09:42:36Z',
            annotations: {
              'openshift.io/sa.scc.mcs': 's0:c16,c5',
              'openshift.io/sa.scc.supplemental-groups': '1000250000/10000',
              'openshift.io/sa.scc.uid-range': '1000250000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-apiserver': {
          metadata: {
            name: 'openshift-apiserver',
            selfLink: '/api/v1/namespaces/openshift-apiserver',
            uid: 'ee2c38dd-c3f7-11e9-bc99-024008363f5e',
            resourceVersion: '7173',
            creationTimestamp: '2019-08-21T09:42:03Z',
            labels: {
              'openshift.io/run-level': '1',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c18,c12',
              'openshift.io/sa.scc.supplemental-groups': '1000330000/10000',
              'openshift.io/sa.scc.uid-range': '1000330000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-apiserver-operator': {
          metadata: {
            name: 'openshift-apiserver-operator',
            selfLink: '/api/v1/namespaces/openshift-apiserver-operator',
            uid: '69a252b1-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7021',
            creationTimestamp: '2019-08-21T09:38:20Z',
            labels: {
              'openshift.io/cluster-monitoring': 'true',
              'openshift.io/run-level': '0',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c7,c4',
              'openshift.io/sa.scc.supplemental-groups': '1000050000/10000',
              'openshift.io/sa.scc.uid-range': '1000050000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-authentication': {
          metadata: {
            name: 'openshift-authentication',
            selfLink: '/api/v1/namespaces/openshift-authentication',
            uid: '6a8e49a6-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7217',
            creationTimestamp: '2019-08-21T09:38:22Z',
            labels: {
              'openshift.io/cluster-monitoring': 'true',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c21,c0',
              'openshift.io/sa.scc.supplemental-groups': '1000420000/10000',
              'openshift.io/sa.scc.uid-range': '1000420000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-authentication-operator': {
          metadata: {
            name: 'openshift-authentication-operator',
            selfLink: '/api/v1/namespaces/openshift-authentication-operator',
            uid: '69a0555e-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7222',
            creationTimestamp: '2019-08-21T09:38:20Z',
            labels: {
              'openshift.io/cluster-monitoring': 'true',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c21,c5',
              'openshift.io/sa.scc.supplemental-groups': '1000430000/10000',
              'openshift.io/sa.scc.uid-range': '1000430000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-cloud-credential-operator': {
          metadata: {
            name: 'openshift-cloud-credential-operator',
            selfLink: '/api/v1/namespaces/openshift-cloud-credential-operator',
            uid: '6b4f943f-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7154',
            creationTimestamp: '2019-08-21T09:38:23Z',
            labels: {
              'controller-tools.k8s.io': '1.0',
              'openshift.io/run-level': '1',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c17,c9',
              'openshift.io/sa.scc.supplemental-groups': '1000290000/10000',
              'openshift.io/sa.scc.uid-range': '1000290000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-cluster-machine-approver': {
          metadata: {
            name: 'openshift-cluster-machine-approver',
            selfLink: '/api/v1/namespaces/openshift-cluster-machine-approver',
            uid: '699f2cc7-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7232',
            creationTimestamp: '2019-08-21T09:38:20Z',
            labels: {
              'openshift.io/run-level': '0',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c21,c10',
              'openshift.io/sa.scc.supplemental-groups': '1000440000/10000',
              'openshift.io/sa.scc.uid-range': '1000440000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-cluster-node-tuning-operator': {
          metadata: {
            name: 'openshift-cluster-node-tuning-operator',
            selfLink: '/api/v1/namespaces/openshift-cluster-node-tuning-operator',
            uid: '699a8a66-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7162',
            creationTimestamp: '2019-08-21T09:38:20Z',
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c17,c14',
              'openshift.io/sa.scc.supplemental-groups': '1000300000/10000',
              'openshift.io/sa.scc.uid-range': '1000300000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-cluster-samples-operator': {
          metadata: {
            name: 'openshift-cluster-samples-operator',
            selfLink: '/api/v1/namespaces/openshift-cluster-samples-operator',
            uid: '6ab13ec4-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7180',
            creationTimestamp: '2019-08-21T09:38:22Z',
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c18,c17',
              'openshift.io/sa.scc.supplemental-groups': '1000340000/10000',
              'openshift.io/sa.scc.uid-range': '1000340000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-cluster-storage-operator': {
          metadata: {
            name: 'openshift-cluster-storage-operator',
            selfLink: '/api/v1/namespaces/openshift-cluster-storage-operator',
            uid: '699cfcae-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7074',
            creationTimestamp: '2019-08-21T09:38:20Z',
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c12,c4',
              'openshift.io/sa.scc.supplemental-groups': '1000140000/10000',
              'openshift.io/sa.scc.uid-range': '1000140000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-cluster-version': {
          metadata: {
            name: 'openshift-cluster-version',
            selfLink: '/api/v1/namespaces/openshift-cluster-version',
            uid: '47c98896-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7110',
            creationTimestamp: '2019-08-21T09:37:24Z',
            labels: {
              name: 'openshift-cluster-version',
              'openshift.io/run-level': '1',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c15,c5',
              'openshift.io/sa.scc.supplemental-groups': '1000220000/10000',
              'openshift.io/sa.scc.uid-range': '1000220000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-config': {
          metadata: {
            name: 'openshift-config',
            selfLink: '/api/v1/namespaces/openshift-config',
            uid: '47cc313e-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7193',
            creationTimestamp: '2019-08-21T09:37:24Z',
            labels: {
              'openshift.io/run-level': '0',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c19,c14',
              'openshift.io/sa.scc.supplemental-groups': '1000370000/10000',
              'openshift.io/sa.scc.uid-range': '1000370000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-config-managed': {
          metadata: {
            name: 'openshift-config-managed',
            selfLink: '/api/v1/namespaces/openshift-config-managed',
            uid: '47cabb1d-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7113',
            creationTimestamp: '2019-08-21T09:37:24Z',
            labels: {
              'openshift.io/run-level': '0',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c15,c10',
              'openshift.io/sa.scc.supplemental-groups': '1000230000/10000',
              'openshift.io/sa.scc.uid-range': '1000230000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-console': {
          metadata: {
            name: 'openshift-console',
            selfLink: '/api/v1/namespaces/openshift-console',
            uid: '09f59816-c3f8-11e9-8d4c-0a82c596e194',
            resourceVersion: '7249',
            creationTimestamp: '2019-08-21T09:42:49Z',
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c21,c15',
              'openshift.io/sa.scc.supplemental-groups': '1000450000/10000',
              'openshift.io/sa.scc.uid-range': '1000450000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-console-operator': {
          metadata: {
            name: 'openshift-console-operator',
            selfLink: '/api/v1/namespaces/openshift-console-operator',
            uid: '0a497baa-c3f8-11e9-8d4c-0a82c596e194',
            resourceVersion: '7137',
            creationTimestamp: '2019-08-21T09:42:50Z',
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c16,c10',
              'openshift.io/sa.scc.supplemental-groups': '1000260000/10000',
              'openshift.io/sa.scc.uid-range': '1000260000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-controller-manager': {
          metadata: {
            name: 'openshift-controller-manager',
            selfLink: '/api/v1/namespaces/openshift-controller-manager',
            uid: '69e0916d-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7199',
            creationTimestamp: '2019-08-21T09:38:21Z',
            labels: {
              'openshift.io/cluster-monitoring': 'true',
              'openshift.io/run-level': '1',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c20,c0',
              'openshift.io/sa.scc.supplemental-groups': '1000380000/10000',
              'openshift.io/sa.scc.uid-range': '1000380000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-controller-manager-operator': {
          metadata: {
            name: 'openshift-controller-manager-operator',
            selfLink: '/api/v1/namespaces/openshift-controller-manager-operator',
            uid: '699b3784-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7183',
            creationTimestamp: '2019-08-21T09:38:20Z',
            labels: {
              'openshift.io/cluster-monitoring': 'true',
              'openshift.io/run-level': '0',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c19,c4',
              'openshift.io/sa.scc.supplemental-groups': '1000350000/10000',
              'openshift.io/sa.scc.uid-range': '1000350000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-dns': {
          metadata: {
            name: 'openshift-dns',
            selfLink: '/api/v1/namespaces/openshift-dns',
            uid: '9841f8f1-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7031',
            creationTimestamp: '2019-08-21T09:39:39Z',
            labels: {
              'openshift.io/cluster-monitoring': 'true',
              'openshift.io/run-level': '0',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c8,c2',
              'openshift.io/sa.scc.supplemental-groups': '1000060000/10000',
              'openshift.io/sa.scc.uid-range': '1000060000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-dns-operator': {
          metadata: {
            name: 'openshift-dns-operator',
            selfLink: '/api/v1/namespaces/openshift-dns-operator',
            uid: '6b7a919d-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7187',
            creationTimestamp: '2019-08-21T09:38:23Z',
            labels: {
              'openshift.io/run-level': '0',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c19,c9',
              'openshift.io/sa.scc.supplemental-groups': '1000360000/10000',
              'openshift.io/sa.scc.uid-range': '1000360000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-etcd': {
          metadata: {
            name: 'openshift-etcd',
            selfLink: '/api/v1/namespaces/openshift-etcd',
            uid: '49282796-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7123',
            creationTimestamp: '2019-08-21T09:37:26Z',
            labels: {
              'openshift.io/run-level': '1',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c16,c0',
              'openshift.io/sa.scc.supplemental-groups': '1000240000/10000',
              'openshift.io/sa.scc.uid-range': '1000240000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-image-registry': {
          metadata: {
            name: 'openshift-image-registry',
            selfLink: '/api/v1/namespaces/openshift-image-registry',
            uid: '6b01c14b-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7090',
            creationTimestamp: '2019-08-21T09:38:23Z',
            labels: {
              'openshift.io/cluster-monitoring': 'true',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c13,c7',
              'openshift.io/sa.scc.supplemental-groups': '1000170000/10000',
              'openshift.io/sa.scc.uid-range': '1000170000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-infra': {
          metadata: {
            name: 'openshift-infra',
            selfLink: '/api/v1/namespaces/openshift-infra',
            uid: '4994866a-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7081',
            creationTimestamp: '2019-08-21T09:37:27Z',
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c12,c9',
              'openshift.io/sa.scc.supplemental-groups': '1000150000/10000',
              'openshift.io/sa.scc.uid-range': '1000150000/10000',
            },
            ownerReferences: [
              {
                apiVersion: 'operator.openshift.io/v1',
                kind: 'Network',
                name: 'cluster',
                uid: '726b4e9b-c3f7-11e9-9b79-02c08f7a1d20',
                controller: true,
                blockOwnerDeletion: true,
              },
            ],
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-ingress': {
          metadata: {
            name: 'openshift-ingress',
            selfLink: '/api/v1/namespaces/openshift-ingress',
            uid: '5b1c6ef3-c3f8-11e9-8762-06ab32897ee4',
            resourceVersion: '11025',
            creationTimestamp: '2019-08-21T09:45:05Z',
            labels: {
              name: 'openshift-ingress',
              'network.openshift.io/policy-group': 'ingress',
              'openshift.io/cluster-monitoring': 'true',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c21,c20',
              'openshift.io/sa.scc.supplemental-groups': '1000460000/10000',
              'openshift.io/sa.scc.uid-range': '1000460000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-ingress-operator': {
          metadata: {
            name: 'openshift-ingress-operator',
            selfLink: '/api/v1/namespaces/openshift-ingress-operator',
            uid: '6f35fb26-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7041',
            creationTimestamp: '2019-08-21T09:38:30Z',
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c8,c7',
              'openshift.io/sa.scc.supplemental-groups': '1000070000/10000',
              'openshift.io/sa.scc.uid-range': '1000070000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-kube-apiserver': {
          metadata: {
            name: 'openshift-kube-apiserver',
            selfLink: '/api/v1/namespaces/openshift-kube-apiserver',
            uid: '47d0a4b7-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7086',
            creationTimestamp: '2019-08-21T09:37:24Z',
            labels: {
              'openshift.io/run-level': '0',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c13,c2',
              'openshift.io/sa.scc.supplemental-groups': '1000160000/10000',
              'openshift.io/sa.scc.uid-range': '1000160000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-kube-apiserver-operator': {
          metadata: {
            name: 'openshift-kube-apiserver-operator',
            selfLink: '/api/v1/namespaces/openshift-kube-apiserver-operator',
            uid: '47d1243b-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7060',
            creationTimestamp: '2019-08-21T09:37:24Z',
            labels: {
              'openshift.io/cluster-monitoring': 'true',
              'openshift.io/run-level': '0',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c10,c5',
              'openshift.io/sa.scc.supplemental-groups': '1000100000/10000',
              'openshift.io/sa.scc.uid-range': '1000100000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-kube-controller-manager': {
          metadata: {
            name: 'openshift-kube-controller-manager',
            selfLink: '/api/v1/namespaces/openshift-kube-controller-manager',
            uid: '47d1ae9f-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '6928',
            creationTimestamp: '2019-08-21T09:37:24Z',
            labels: {
              'openshift.io/run-level': '0',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c3,c2',
              'openshift.io/sa.scc.supplemental-groups': '1000010000/10000',
              'openshift.io/sa.scc.uid-range': '1000010000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-kube-controller-manager-operator': {
          metadata: {
            name: 'openshift-kube-controller-manager-operator',
            selfLink: '/api/v1/namespaces/openshift-kube-controller-manager-operator',
            uid: '47d2360c-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7053',
            creationTimestamp: '2019-08-21T09:37:24Z',
            labels: {
              'openshift.io/cluster-monitoring': 'true',
              'openshift.io/run-level': '0',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c10,c0',
              'openshift.io/sa.scc.supplemental-groups': '1000090000/10000',
              'openshift.io/sa.scc.uid-range': '1000090000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-kube-scheduler': {
          metadata: {
            name: 'openshift-kube-scheduler',
            selfLink: '/api/v1/namespaces/openshift-kube-scheduler',
            uid: '47d2baa9-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7201',
            creationTimestamp: '2019-08-21T09:37:24Z',
            labels: {
              'openshift.io/run-level': '0',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c20,c5',
              'openshift.io/sa.scc.supplemental-groups': '1000390000/10000',
              'openshift.io/sa.scc.uid-range': '1000390000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-kube-scheduler-operator': {
          metadata: {
            name: 'openshift-kube-scheduler-operator',
            selfLink: '/api/v1/namespaces/openshift-kube-scheduler-operator',
            uid: '69a07e55-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7206',
            creationTimestamp: '2019-08-21T09:38:20Z',
            labels: {
              'openshift.io/run-level': '0',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c20,c10',
              'openshift.io/sa.scc.supplemental-groups': '1000400000/10000',
              'openshift.io/sa.scc.uid-range': '1000400000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-machine-api': {
          metadata: {
            name: 'openshift-machine-api',
            selfLink: '/api/v1/namespaces/openshift-machine-api',
            uid: '699e7be1-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7210',
            creationTimestamp: '2019-08-21T09:38:20Z',
            labels: {
              name: 'openshift-machine-api',
              'openshift.io/run-level': '1',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c20,c15',
              'openshift.io/sa.scc.supplemental-groups': '1000410000/10000',
              'openshift.io/sa.scc.uid-range': '1000410000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-machine-config-operator': {
          metadata: {
            name: 'openshift-machine-config-operator',
            selfLink: '/api/v1/namespaces/openshift-machine-config-operator',
            uid: '47d33a56-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7165',
            creationTimestamp: '2019-08-21T09:37:24Z',
            labels: {
              name: 'openshift-machine-config-operator',
              'openshift.io/run-level': '1',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c18,c2',
              'openshift.io/sa.scc.supplemental-groups': '1000310000/10000',
              'openshift.io/sa.scc.uid-range': '1000310000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-marketplace': {
          metadata: {
            name: 'openshift-marketplace',
            selfLink: '/api/v1/namespaces/openshift-marketplace',
            uid: '699dedca-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7093',
            creationTimestamp: '2019-08-21T09:38:20Z',
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c13,c12',
              'openshift.io/sa.scc.supplemental-groups': '1000180000/10000',
              'openshift.io/sa.scc.uid-range': '1000180000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-migration': {
          metadata: {
            name: 'openshift-migration',
            selfLink: '/api/v1/namespaces/openshift-migration',
            uid: 'cd6ca2c3-c4e6-11e9-b418-0a82c596e194',
            resourceVersion: '434607',
            creationTimestamp: '2019-08-22T14:11:57Z',
            labels: {
              'control-plane': 'controller-manager',
              'controller-tools.k8s.io': '1.0',
            },
            annotations: {
              'openshift.io/sa.scc.mcs': 's0:c23,c12',
              'openshift.io/sa.scc.supplemental-groups': '1000530000/10000',
              'openshift.io/sa.scc.uid-range': '1000530000/10000',
              'operator-sdk/primary-resource': 'openshift-migration-operator/migration-controller',
              'operator-sdk/primary-resource-type': 'MigrationController.migration.openshift.io',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-migration-operator': {
          metadata: {
            name: 'openshift-migration-operator',
            selfLink: '/api/v1/namespaces/openshift-migration-operator',
            uid: '677bc828-c4e6-11e9-bbed-06ab32897ee4',
            resourceVersion: '433771',
            creationTimestamp: '2019-08-22T14:09:06Z',
            labels: {
              'control-plane': 'controller-manager',
              'controller-tools.k8s.io': '1.0',
            },
            annotations: {
              'openshift.io/sa.scc.mcs': 's0:c23,c7',
              'openshift.io/sa.scc.supplemental-groups': '1000520000/10000',
              'openshift.io/sa.scc.uid-range': '1000520000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-monitoring': {
          metadata: {
            name: 'openshift-monitoring',
            selfLink: '/api/v1/namespaces/openshift-monitoring',
            uid: '699f99ec-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7145',
            creationTimestamp: '2019-08-21T09:38:20Z',
            labels: {
              name: 'openshift-monitoring',
              'network.openshift.io/policy-group': 'monitoring',
              'openshift.io/cluster-monitoring': 'true',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c16,c15',
              'openshift.io/sa.scc.supplemental-groups': '1000270000/10000',
              'openshift.io/sa.scc.uid-range': '1000270000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-multus': {
          metadata: {
            name: 'openshift-multus',
            selfLink: '/api/v1/namespaces/openshift-multus',
            uid: '72e15cd3-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '6945',
            creationTimestamp: '2019-08-21T09:38:36Z',
            labels: {
              name: 'openshift-multus',
              'openshift.io/run-level': '0',
            },
            annotations: {
              'openshift.io/description': 'Multus network plugin components',
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c5,c0',
              'openshift.io/sa.scc.supplemental-groups': '1000020000/10000',
              'openshift.io/sa.scc.uid-range': '1000020000/10000',
            },
            ownerReferences: [
              {
                apiVersion: 'operator.openshift.io/v1',
                kind: 'Network',
                name: 'cluster',
                uid: '726b4e9b-c3f7-11e9-9b79-02c08f7a1d20',
                controller: true,
                blockOwnerDeletion: true,
              },
            ],
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-network-operator': {
          metadata: {
            name: 'openshift-network-operator',
            selfLink: '/api/v1/namespaces/openshift-network-operator',
            uid: '699efead-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7099',
            creationTimestamp: '2019-08-21T09:38:20Z',
            labels: {
              name: 'openshift-network-operator',
              'openshift.io/run-level': '0',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c14,c4',
              'openshift.io/sa.scc.supplemental-groups': '1000190000/10000',
              'openshift.io/sa.scc.uid-range': '1000190000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-node': {
          metadata: {
            name: 'openshift-node',
            selfLink: '/api/v1/namespaces/openshift-node',
            uid: '024c4fcb-c3f8-11e9-bc99-024008363f5e',
            resourceVersion: '7070',
            creationTimestamp: '2019-08-21T09:42:36Z',
            annotations: {
              'openshift.io/sa.scc.mcs': 's0:c11,c10',
              'openshift.io/sa.scc.supplemental-groups': '1000130000/10000',
              'openshift.io/sa.scc.uid-range': '1000130000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-operator-lifecycle-manager': {
          metadata: {
            name: 'openshift-operator-lifecycle-manager',
            selfLink: '/api/v1/namespaces/openshift-operator-lifecycle-manager',
            uid: '699f1e87-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7104',
            creationTimestamp: '2019-08-21T09:38:20Z',
            labels: {
              'openshift.io/cluster-monitoring': 'true',
              'openshift.io/run-level': '1',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c14,c9',
              'openshift.io/sa.scc.supplemental-groups': '1000200000/10000',
              'openshift.io/sa.scc.uid-range': '1000200000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-operators': {
          metadata: {
            name: 'openshift-operators',
            selfLink: '/api/v1/namespaces/openshift-operators',
            uid: '6a4baa42-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '6980',
            creationTimestamp: '2019-08-21T09:38:21Z',
            labels: {
              'openshift.io/run-level': '1',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c6,c0',
              'openshift.io/sa.scc.supplemental-groups': '1000030000/10000',
              'openshift.io/sa.scc.uid-range': '1000030000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-sdn': {
          metadata: {
            name: 'openshift-sdn',
            selfLink: '/api/v1/namespaces/openshift-sdn',
            uid: '73668296-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7064',
            creationTimestamp: '2019-08-21T09:38:37Z',
            labels: {
              name: 'openshift-sdn',
              'openshift.io/cluster-monitoring': 'true',
              'openshift.io/run-level': '0',
            },
            annotations: {
              'openshift.io/description': 'OpenShift SDN components',
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c11,c0',
              'openshift.io/sa.scc.supplemental-groups': '1000110000/10000',
              'openshift.io/sa.scc.uid-range': '1000110000/10000',
            },
            ownerReferences: [
              {
                apiVersion: 'operator.openshift.io/v1',
                kind: 'Network',
                name: 'cluster',
                uid: '726b4e9b-c3f7-11e9-9b79-02c08f7a1d20',
                controller: true,
                blockOwnerDeletion: true,
              },
            ],
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-service-ca': {
          metadata: {
            name: 'openshift-service-ca',
            selfLink: '/api/v1/namespaces/openshift-service-ca',
            uid: '9556e25b-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7108',
            creationTimestamp: '2019-08-21T09:39:34Z',
            labels: {
              'openshift.io/run-level': '1',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c15,c0',
              'openshift.io/sa.scc.supplemental-groups': '1000210000/10000',
              'openshift.io/sa.scc.uid-range': '1000210000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-service-ca-operator': {
          metadata: {
            name: 'openshift-service-ca-operator',
            selfLink: '/api/v1/namespaces/openshift-service-ca-operator',
            uid: '6a57d906-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7004',
            creationTimestamp: '2019-08-21T09:38:21Z',
            labels: {
              'openshift.io/run-level': '1',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c6,c5',
              'openshift.io/sa.scc.supplemental-groups': '1000040000/10000',
              'openshift.io/sa.scc.uid-range': '1000040000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-service-catalog-apiserver-operator': {
          metadata: {
            name: 'openshift-service-catalog-apiserver-operator',
            selfLink: '/api/v1/namespaces/openshift-service-catalog-apiserver-operator',
            uid: '699fcaa8-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7168',
            creationTimestamp: '2019-08-21T09:38:20Z',
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c18,c7',
              'openshift.io/sa.scc.supplemental-groups': '1000320000/10000',
              'openshift.io/sa.scc.uid-range': '1000320000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-service-catalog-controller-manager-operator': {
          metadata: {
            name: 'openshift-service-catalog-controller-manager-operator',
            selfLink: '/api/v1/namespaces/openshift-service-catalog-controller-manager-operator',
            uid: '699f0fed-c3f7-11e9-9b79-02c08f7a1d20',
            resourceVersion: '7068',
            creationTimestamp: '2019-08-21T09:38:20Z',
            labels: {
              'openshift.io/cluster-monitoring': 'true',
            },
            annotations: {
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c11,c5',
              'openshift.io/sa.scc.supplemental-groups': '1000120000/10000',
              'openshift.io/sa.scc.uid-range': '1000120000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
      },
      'api/v1/persistentvolumes': {},
      'apis/storage.k8s.io/v1/storageclasses': {
        gp2: {
          metadata: {
            name: 'gp2',
            selfLink: '/apis/storage.k8s.io/v1/storageclasses/gp2',
            uid: '572272cd-c3f8-11e9-8762-06ab32897ee4',
            resourceVersion: '10401',
            creationTimestamp: '2019-08-21T09:44:59Z',
            annotations: {
              'storageclass.kubernetes.io/is-default-class': 'true',
            },
            ownerReferences: [
              {
                apiVersion: 'v1',
                kind: 'clusteroperator',
                name: 'storage',
                uid: '4ea6ca7f-c3f7-11e9-9b79-02c08f7a1d20',
              },
            ],
          },
          provisioner: 'kubernetes.io/aws-ebs',
          parameters: {
            encrypted: 'true',
            type: 'gp2',
          },
          reclaimPolicy: 'Delete',
          volumeBindingMode: 'WaitForFirstConsumer',
        },
        'gp2-copy': {
          metadata: {
            name: 'gp2-copy',
            selfLink: '/apis/storage.k8s.io/v1/storageclasses/gp2-copy',
            uid: 'dd94b7a2-c579-11e9-bbed-06ab32897ee4',
            resourceVersion: '693306',
            creationTimestamp: '2019-08-23T07:44:41Z',
            annotations: {
              'storageclass.kubernetes.io/is-default-class': 'true',
            },
            ownerReferences: [
              {
                apiVersion: 'v1',
                kind: 'clusteroperator',
                name: 'storage',
                uid: 'fdb3c999-bce0-11e9-b596-02c6f6e7c5d0',
              },
            ],
          },
          provisioner: 'kubernetes.io/aws-ebs',
          parameters: {
            encrypted: 'true',
            type: 'gp2',
          },
          reclaimPolicy: 'Delete',
          volumeBindingMode: 'WaitForFirstConsumer',
        },
      },
    },
    source: {
      'api/v1/namespaces': {
        default: {
          metadata: {
            name: 'default',
            selfLink: '/api/v1/namespaces/default',
            uid: 'f731ac7e-bd39-11e9-8f9c-0a58ab88de30',
            resourceVersion: '5731',
            creationTimestamp: '2019-08-12T19:47:06Z',
            annotations: {
              'alm-manager': 'operator-lifecycle-manager.olm-operator',
              'openshift.io/logging.data.prefix': '.operations',
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c1,c0',
              'openshift.io/sa.scc.supplemental-groups': '1000000000/10000',
              'openshift.io/sa.scc.uid-range': '1000000000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'kube-public': {
          metadata: {
            name: 'kube-public',
            selfLink: '/api/v1/namespaces/kube-public',
            uid: 'f7396ced-bd39-11e9-8f9c-0a58ab88de30',
            resourceVersion: '5732',
            creationTimestamp: '2019-08-12T19:47:07Z',
            annotations: {
              'alm-manager': 'operator-lifecycle-manager.olm-operator',
              'openshift.io/sa.scc.mcs': 's0:c3,c2',
              'openshift.io/sa.scc.supplemental-groups': '1000010000/10000',
              'openshift.io/sa.scc.uid-range': '1000010000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'kube-service-catalog': {
          metadata: {
            name: 'kube-service-catalog',
            selfLink: '/api/v1/namespaces/kube-service-catalog',
            uid: 'cd1e5a61-bd3b-11e9-8f9c-0a58ab88de30',
            resourceVersion: '5733',
            creationTimestamp: '2019-08-12T20:00:15Z',
            annotations: {
              'alm-manager': 'operator-lifecycle-manager.olm-operator',
              'openshift.io/description': '',
              'openshift.io/display-name': '',
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c15,c5',
              'openshift.io/sa.scc.supplemental-groups': '1000220000/10000',
              'openshift.io/sa.scc.uid-range': '1000220000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'kube-system': {
          metadata: {
            name: 'kube-system',
            selfLink: '/api/v1/namespaces/kube-system',
            uid: 'f73560ce-bd39-11e9-8f9c-0a58ab88de30',
            resourceVersion: '5734',
            creationTimestamp: '2019-08-12T19:47:06Z',
            annotations: {
              'alm-manager': 'operator-lifecycle-manager.olm-operator',
              'openshift.io/logging.data.prefix': '.operations',
              'openshift.io/sa.scc.mcs': 's0:c5,c0',
              'openshift.io/sa.scc.supplemental-groups': '1000020000/10000',
              'openshift.io/sa.scc.uid-range': '1000020000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'management-infra': {
          metadata: {
            name: 'management-infra',
            selfLink: '/api/v1/namespaces/management-infra',
            uid: '6c936768-bd3a-11e9-8f9c-0a58ab88de30',
            resourceVersion: '5735',
            creationTimestamp: '2019-08-12T19:50:23Z',
            annotations: {
              'alm-manager': 'operator-lifecycle-manager.olm-operator',
              'openshift.io/description': 'Management Infrastructure',
              'openshift.io/display-name': '',
              'openshift.io/sa.scc.mcs': 's0:c10,c0',
              'openshift.io/sa.scc.supplemental-groups': '1000090000/10000',
              'openshift.io/sa.scc.uid-range': '1000090000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'mssql-persistent': {
          metadata: {
            name: 'mssql-persistent',
            selfLink: '/api/v1/namespaces/mssql-persistent',
            uid: 'a31f5812-bd87-11e9-8a7f-0a58ab88de30',
            resourceVersion: '552551',
            creationTimestamp: '2019-08-13T05:03:06Z',
            labels: {
              app: 'mssql-container',
            },
            annotations: {
              'alm-manager': 'operator-lifecycle-manager.olm-operator',
              'kubectl.kubernetes.io/last-applied-configuration':
                '{"apiVersion":"v1","kind":"Namespace","metadata":{"annotations":{},"labels":{"app":"mssql-container"},"name":"mssql-persistent","namespace":""}}\n',
              'openshift.io/sa.scc.mcs': 's0:c18,c12',
              'openshift.io/sa.scc.supplemental-groups': '1000330000/10000',
              'openshift.io/sa.scc.uid-range': '1000330000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'mysql-persistent-test-move': {
          metadata: {
            name: 'mysql-persistent-test-move',
            selfLink: '/api/v1/namespaces/mysql-persistent-test-move',
            uid: '784ada3f-c57a-11e9-8ae7-0a58ab88de30',
            resourceVersion: '1959386',
            creationTimestamp: '2019-08-23T07:49:00Z',
            labels: {
              app: 'mysql',
            },
            annotations: {
              'alm-manager': 'operator-lifecycle-manager.olm-operator',
              'openshift.io/sa.scc.mcs': 's0:c15,c0',
              'openshift.io/sa.scc.supplemental-groups': '1000210000/10000',
              'openshift.io/sa.scc.uid-range': '1000210000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'ocp-workshop': {
          metadata: {
            name: 'ocp-workshop',
            selfLink: '/api/v1/namespaces/ocp-workshop',
            uid: '8c534653-bd3c-11e9-8f9c-0a58ab88de30',
            resourceVersion: '6638',
            creationTimestamp: '2019-08-12T20:05:36Z',
            annotations: {
              'alm-manager': 'operator-lifecycle-manager.olm-operator',
              'openshift.io/description': '',
              'openshift.io/display-name': '',
              'openshift.io/node-selector': 'node-role.kubernetes.io/infra=true',
              'openshift.io/sa.scc.mcs': 's0:c18,c7',
              'openshift.io/sa.scc.supplemental-groups': '1000320000/10000',
              'openshift.io/sa.scc.uid-range': '1000320000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        openshift: {
          metadata: {
            name: 'openshift',
            selfLink: '/api/v1/namespaces/openshift',
            uid: 'f7cbf13f-bd39-11e9-8f9c-0a58ab88de30',
            resourceVersion: '5736',
            creationTimestamp: '2019-08-12T19:47:07Z',
            annotations: {
              'alm-manager': 'operator-lifecycle-manager.olm-operator',
              'openshift.io/logging.data.prefix': '.operations',
              'openshift.io/sa.scc.mcs': 's0:c6,c0',
              'openshift.io/sa.scc.supplemental-groups': '1000030000/10000',
              'openshift.io/sa.scc.uid-range': '1000030000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-ansible-service-broker': {
          metadata: {
            name: 'openshift-ansible-service-broker',
            selfLink: '/api/v1/namespaces/openshift-ansible-service-broker',
            uid: '1ee7cd90-bd3c-11e9-8f9c-0a58ab88de30',
            resourceVersion: '5737',
            creationTimestamp: '2019-08-12T20:02:32Z',
            annotations: {
              'alm-manager': 'operator-lifecycle-manager.olm-operator',
              'openshift.io/description': '',
              'openshift.io/display-name': '',
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c15,c10',
              'openshift.io/sa.scc.supplemental-groups': '1000230000/10000',
              'openshift.io/sa.scc.uid-range': '1000230000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-console': {
          metadata: {
            name: 'openshift-console',
            selfLink: '/api/v1/namespaces/openshift-console',
            uid: 'f46c03f3-bd3a-11e9-8f9c-0a58ab88de30',
            resourceVersion: '5738',
            creationTimestamp: '2019-08-12T19:54:11Z',
            annotations: {
              'alm-manager': 'operator-lifecycle-manager.olm-operator',
              'openshift.io/description': '',
              'openshift.io/display-name': '',
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c13,c12',
              'openshift.io/sa.scc.supplemental-groups': '1000180000/10000',
              'openshift.io/sa.scc.uid-range': '1000180000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-infra': {
          metadata: {
            name: 'openshift-infra',
            selfLink: '/api/v1/namespaces/openshift-infra',
            uid: 'f781f070-bd39-11e9-8f9c-0a58ab88de30',
            resourceVersion: '5739',
            creationTimestamp: '2019-08-12T19:47:07Z',
            annotations: {
              'alm-manager': 'operator-lifecycle-manager.olm-operator',
              'openshift.io/logging.data.prefix': '.operations',
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c6,c5',
              'openshift.io/sa.scc.supplemental-groups': '1000040000/10000',
              'openshift.io/sa.scc.uid-range': '1000040000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-logging': {
          metadata: {
            name: 'openshift-logging',
            selfLink: '/api/v1/namespaces/openshift-logging',
            uid: 'ab5d68e2-bd3a-11e9-8f9c-0a58ab88de30',
            resourceVersion: '5740',
            creationTimestamp: '2019-08-12T19:52:09Z',
            annotations: {
              'alm-manager': 'operator-lifecycle-manager.olm-operator',
              'openshift.io/description': '',
              'openshift.io/display-name': '',
              'openshift.io/logging.data.prefix': '.operations',
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c11,c0',
              'openshift.io/sa.scc.supplemental-groups': '1000110000/10000',
              'openshift.io/sa.scc.uid-range': '1000110000/10000',
              'quota.openshift.io/cluster-resource-override-enabled': 'false',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-metrics-server': {
          metadata: {
            name: 'openshift-metrics-server',
            selfLink: '/api/v1/namespaces/openshift-metrics-server',
            uid: '47376735-bd3b-11e9-8f9c-0a58ab88de30',
            resourceVersion: '5744',
            creationTimestamp: '2019-08-12T19:56:30Z',
            annotations: {
              'alm-manager': 'operator-lifecycle-manager.olm-operator',
              'openshift.io/description': '',
              'openshift.io/display-name': '',
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c14,c9',
              'openshift.io/sa.scc.supplemental-groups': '1000200000/10000',
              'openshift.io/sa.scc.uid-range': '1000200000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-migration': {
          metadata: {
            name: 'openshift-migration',
            selfLink: '/api/v1/namespaces/openshift-migration',
            uid: '78b663a8-c44e-11e9-b03f-0a58ab88de30',
            resourceVersion: '1681836',
            creationTimestamp: '2019-08-21T20:01:32Z',
            labels: {
              'control-plane': 'controller-manager',
              'controller-tools.k8s.io': '1.0',
            },
            annotations: {
              'alm-manager': 'operator-lifecycle-manager.olm-operator',
              'openshift.io/sa.scc.mcs': 's0:c12,c9',
              'openshift.io/sa.scc.supplemental-groups': '1000150000/10000',
              'openshift.io/sa.scc.uid-range': '1000150000/10000',
              'operator-sdk/primary-resource': 'openshift-migration-operator/migration-controller',
              'operator-sdk/primary-resource-type': 'MigrationController.migration.openshift.io',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-migration-operator': {
          metadata: {
            name: 'openshift-migration-operator',
            selfLink: '/api/v1/namespaces/openshift-migration-operator',
            uid: '6bf91cb7-c44e-11e9-b03f-0a58ab88de30',
            resourceVersion: '1681712',
            creationTimestamp: '2019-08-21T20:01:10Z',
            labels: {
              'control-plane': 'controller-manager',
              'controller-tools.k8s.io': '1.0',
            },
            annotations: {
              'alm-manager': 'operator-lifecycle-manager.olm-operator',
              'openshift.io/sa.scc.mcs': 's0:c9,c4',
              'openshift.io/sa.scc.supplemental-groups': '1000080000/10000',
              'openshift.io/sa.scc.uid-range': '1000080000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-monitoring': {
          metadata: {
            name: 'openshift-monitoring',
            selfLink: '/api/v1/namespaces/openshift-monitoring',
            uid: 'c8cc300f-bd3a-11e9-8f9c-0a58ab88de30',
            resourceVersion: '5748',
            creationTimestamp: '2019-08-12T19:52:58Z',
            labels: {
              'openshift.io/cluster-monitoring': 'true',
            },
            annotations: {
              'alm-manager': 'operator-lifecycle-manager.olm-operator',
              'openshift.io/description': 'Openshift Monitoring',
              'openshift.io/display-name': '',
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c12,c4',
              'openshift.io/sa.scc.supplemental-groups': '1000140000/10000',
              'openshift.io/sa.scc.uid-range': '1000140000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-node': {
          metadata: {
            name: 'openshift-node',
            selfLink: '/api/v1/namespaces/openshift-node',
            uid: 'f7ccca56-bd39-11e9-8f9c-0a58ab88de30',
            resourceVersion: '5750',
            creationTimestamp: '2019-08-12T19:47:07Z',
            annotations: {
              'alm-manager': 'operator-lifecycle-manager.olm-operator',
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c7,c4',
              'openshift.io/sa.scc.supplemental-groups': '1000050000/10000',
              'openshift.io/sa.scc.uid-range': '1000050000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-sdn': {
          metadata: {
            name: 'openshift-sdn',
            selfLink: '/api/v1/namespaces/openshift-sdn',
            uid: '5e3cc59f-bd3a-11e9-8f9c-0a58ab88de30',
            resourceVersion: '5752',
            creationTimestamp: '2019-08-12T19:49:59Z',
            annotations: {
              'alm-manager': 'operator-lifecycle-manager.olm-operator',
              'openshift.io/description': '',
              'openshift.io/display-name': '',
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c8,c7',
              'openshift.io/sa.scc.supplemental-groups': '1000070000/10000',
              'openshift.io/sa.scc.uid-range': '1000070000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-template-service-broker': {
          metadata: {
            name: 'openshift-template-service-broker',
            selfLink: '/api/v1/namespaces/openshift-template-service-broker',
            uid: '2c4562a3-bd3c-11e9-8f9c-0a58ab88de30',
            resourceVersion: '5755',
            creationTimestamp: '2019-08-12T20:02:54Z',
            annotations: {
              'alm-manager': 'operator-lifecycle-manager.olm-operator',
              'openshift.io/description': '',
              'openshift.io/display-name': '',
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c16,c5',
              'openshift.io/sa.scc.supplemental-groups': '1000250000/10000',
              'openshift.io/sa.scc.uid-range': '1000250000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'openshift-web-console': {
          metadata: {
            name: 'openshift-web-console',
            selfLink: '/api/v1/namespaces/openshift-web-console',
            uid: 'e0e92c5a-bd3a-11e9-8f9c-0a58ab88de30',
            resourceVersion: '5757',
            creationTimestamp: '2019-08-12T19:53:39Z',
            annotations: {
              'alm-manager': 'operator-lifecycle-manager.olm-operator',
              'openshift.io/description': '',
              'openshift.io/display-name': '',
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c13,c2',
              'openshift.io/sa.scc.supplemental-groups': '1000160000/10000',
              'openshift.io/sa.scc.uid-range': '1000160000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
        'operator-lifecycle-manager': {
          metadata: {
            name: 'operator-lifecycle-manager',
            selfLink: '/api/v1/namespaces/operator-lifecycle-manager',
            uid: '4f4aac9d-bd3c-11e9-8f9c-0a58ab88de30',
            resourceVersion: '5760',
            creationTimestamp: '2019-08-12T20:03:53Z',
            annotations: {
              'alm-manager': 'operator-lifecycle-manager.olm-operator',
              'openshift.io/description': '',
              'openshift.io/display-name': '',
              'openshift.io/node-selector': '',
              'openshift.io/sa.scc.mcs': 's0:c17,c4',
              'openshift.io/sa.scc.supplemental-groups': '1000280000/10000',
              'openshift.io/sa.scc.uid-range': '1000280000/10000',
            },
          },
          spec: {
            finalizers: ['kubernetes'],
          },
          status: {
            phase: 'Active',
          },
        },
      },
      'api/v1/persistentvolumes': {
        'logging-volume': {
          metadata: {
            name: 'logging-volume',
            selfLink: '/api/v1/persistentvolumes/logging-volume',
            uid: 'a7969614-bd3a-11e9-8f9c-0a58ab88de30',
            resourceVersion: '4151',
            creationTimestamp: '2019-08-12T19:52:02Z',
            labels: {
              storage: 'logging',
            },
            finalizers: ['kubernetes.io/pv-protection'],
          },
          spec: {
            capacity: {
              storage: '10Gi',
            },
            nfs: {
              server: 'support1.demo-source.internal',
              path: '/srv/nfs/logging',
            },
            accessModes: ['ReadWriteOnce'],
            claimRef: {
              kind: 'PersistentVolumeClaim',
              namespace: 'openshift-logging',
              name: 'logging-es-0',
              uid: '957353ed-bd3b-11e9-8f9c-0a58ab88de30',
              apiVersion: 'v1',
              resourceVersion: '4149',
            },
            persistentVolumeReclaimPolicy: 'Retain',
          },
          status: {
            phase: 'Bound',
          },
        },
      },
      'apis/storage.k8s.io/v1/storageclasses': {},
    },
  },
  hostMigClusterName: 'host',
};